import React, { useEffect, useState } from 'react'
import { PagePresence, NewCreateProject } from '@magickml/portal-ui'
import { useSession } from 'next-auth/react'
import { ANONYMOUS, Role } from '@magickml/portal-config'
import Cookies from 'js-cookie'
import { useAtomValue, useSetAtom } from 'jotai'
import {
  defaultWorkspace,
  setWorkspaceAtom,
  workspaceAtom,
} from '@magickml/portal-state'
import { api } from '@magickml/portal-api-client'
import { FrigadeTour } from '@frigade/react'
import { StepData } from '@frigade/react'

/**
 * Props for the `MagickLayout` component.
 */
interface AccountLayoutProps {
  /** Content to be rendered within the layout. */
  children: React.ReactNode
  /** Optional title to be displayed at the top of the layout. */
  title?: string
  /** If set to `true`, it removes certain margins and padding within the layout. */
  nospace?: boolean
  /** Flag for whether the layout is public or not. */
  isPublic?: boolean
}

/**
 * `MagickLayout` serves as a wrapper component that sets up the general layout for an account page.
 */
export const MagickLayout: React.FC<AccountLayoutProps> = ({
  children,
  title,
  nospace,
  isPublic = false,
}) => {
  const session = useSession()
  const [, setRole] = useState<Role>(ANONYMOUS)
  const [agentOnboarding, setAgentOnboarding] = useState<boolean | undefined>(
    undefined
  )
  const [showOnboarding, setShowOnboarding] = useState(false)
  // updateUserOnboarding
  const { mutateAsync: updateUserOnboarding } =
    api.users.updateUserOnboarding.useMutation()
  const utils = api.useContext()
  // move all this out of workspace to its own provider
  // we do this here temporarily to have the workspace ready on pages where we dont have the workspace selector (e.g. agents/[agentId])
  const selectedWorkspace = useAtomValue(workspaceAtom)
  const setSelectedWorkspace = useSetAtom(setWorkspaceAtom)
  const { data: workspaces } = api.workspace.getWorkspaces.useQuery(undefined, {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    enabled: session.status === 'authenticated',
  })
  const { data: user } = api.users.getCurrentUser.useQuery(undefined, {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    enabled: session.status === 'authenticated',
  })

  const invalidateQueries = async () => {
    await utils.projects.getProjects.invalidate()
  }

  useEffect(() => {
    // Client-side initialization of workspace based on cookie
    const workspaceCookie = Cookies.get('workspace')
    if (workspaceCookie) {
      try {
        const workspaceFromCookie = JSON.parse(workspaceCookie)
        setSelectedWorkspace(workspaceFromCookie)
      } catch (error) {
        console.error("Failed to parse 'workspace' cookie:", error)
      }
    }
  }, [])

  useEffect(() => {
    // Only set the default workspace if selectedWorkspace is the defaultWorkspace
    if (
      workspaces &&
      workspaces.length !== 0 &&
      selectedWorkspace === defaultWorkspace
    ) {
      setSelectedWorkspace({
        id: workspaces[0].id,
        name: workspaces[0].name,
      })
    }
  }, [workspaces])

  useEffect(() => {
    if (selectedWorkspace.id.length > 0) {
      invalidateQueries()
    }
  }, [selectedWorkspace])

  // useOnboarding()

  useEffect(() => {
    if (session.data?.user?.role) {
      setRole(session.data.user.role as Role)
    } else {
      setRole(ANONYMOUS)
    }
  }, [session.data?.user?.role])
  useEffect(() => {
    if (user) {
      setAgentOnboarding(user.onboarding?.agents)
    }
  }, [user])

  const updateOnboarding = async () => {
    try {
      await updateUserOnboarding({ onboarding: { agents: true } })
      setAgentOnboarding(true)
    } catch (error) {
      console.log('Failed to update user onboarding:', error)
    }
  }

  useEffect(() => {
    if (user?.profileOnboarding === false) {
      setShowOnboarding(true)
    }
  }, [user?.profileOnboarding])

  return (
    <>
      <NewCreateProject />
      {/* {process.env.NEXT_PUBLIC_PROFILE_ONBOARDING === "true" &&
        showOnboarding && <Onboarding setShow={setShowOnboarding} />} */}

      {!showOnboarding && agentOnboarding !== undefined && !agentOnboarding ? (
        <FrigadeTour
          flowId={process.env.NEXT_PUBLIC_FRIGADE_REMIX_FLOW_ID ?? ''}
          tooltipPosition="auto"
          dismissible={true}
          showStepCount={true}
          onComplete={() => updateOnboarding()}
          customVariables={{
            APP_URL: `${process.env.NEXT_PUBLIC_APP_URL}`,
          }}
          onButtonClick={(step: StepData) => {
            if (step.id === 'step3') {
              if (typeof window !== 'undefined') {
                ;(window as any).onClick()
              }
            }
            return true
          }}
        />
      ) : null}

      <div className="relative bg-[#fff] rounded-sm dark:bg-ds-background color-transition h-screen flex flex-row">
        {/* <MagickSideDrawer
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          isPublic={isPublic}
        /> */}
        <PagePresence>{children}</PagePresence>
      </div>
    </>
  )
}

export * from './SubLayouts'
