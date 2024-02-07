// import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next'
// import { useState } from 'react'
// import { api } from '@magickml/portal-api-client'
import { PlusCircleIcon } from '@heroicons/react/24/solid'
import {
  createProjectOpenAtom,
  // workspaceAtom
} from '@magickml/portal-state'
import {
  // useAtomValue,
  useSetAtom,
} from 'jotai'
// import { useDebounce } from 'use-debounce'
// import { ProjectIcon } from '@magickml/portal-ui'
// import { useScreenWidth } from '@magickml/portal-hooks'
// import { CardGrid } from "components/Cards/CardGrid";
// import { CardGridPagnition } from "components/Cards/CardGridPagnition";
import { MainLayout, PortalLayout } from '@magickml/portal-layout'

export const ProjectsPage = () => {
  const setCreateProjectOpen = useSetAtom(createProjectOpenAtom)

  // const workspace = useAtomValue(workspaceAtom)
  // const debouncedWorkspace = useDebounce(workspace, 500)

  // const utils = api.useContext()

  // const {
  //   data: ownedProjects,
  //   isLoading: ownedProjectsLoading,
  //   isError: ownedProjectsError,
  //   isRefetching: ownedProjectsRefetching,
  // } = api.projects.getProjects.useQuery(
  //   {
  //     workspaceId: workspace?.id,
  //   },
  //   {
  //     enabled: debouncedWorkspace?.[0]?.id.length > 0,
  //   }
  // )

  // const width = useScreenWidth()
  // const [currentPage, setCurrentPage] = useState(1)

  // const getCardsPerPage = () => {
  //   let cardsInRow
  //   if (width >= 1920) cardsInRow = 6
  //   else if (width >= 1536) cardsInRow = 5
  //   else if (width >= 1280) cardsInRow = 4
  //   else if (width >= 1024) cardsInRow = 3
  //   else if (width >= 768) cardsInRow = 2
  //   else cardsInRow = 2

  //   return cardsInRow * 2
  // }
  // const cardsPerPage = getCardsPerPage() - 1 // Subtracting 1 to account for PlaceholderCard

  // const totalProjects = ownedProjects?.length ?? 0
  // const totalPages = Math.ceil(totalProjects / cardsPerPage)

  // const startIndex = (currentPage - 1) * cardsPerPage
  // const endIndex = startIndex + cardsPerPage
  // const projectsToShow: any = ownedProjects?.slice(startIndex, endIndex)

  return (
    <>
      <div className="inline-flex w-full p-4">
        <div className="flex-grow" />
        <button
          id="new-project-btn"
          onClick={() => setCreateProjectOpen(true)}
          className="font-berkley-mono text-black items-center dark:text-white inline-flex justify-center gap-x-1.5 rounded-md px-3 py-2 bg-[#DCE8ED] dark:bg-[#18181D] shadow-sm ring-1 ring-secondary-main hover:bg-gray-50"
        >
          New Project
          <PlusCircleIcon
            className="w-5 h-5 -mr-1 text-black dark:text-white"
            aria-hidden="true"
          />
        </button>
      </div>
      {/* 
      <CardGrid
        itemsToShow={projectsToShow || []}
        Icon={ProjectIcon}
        setCreateProjectOpen={setCreateProjectOpen}
        placeholderText="Create New Project"
        placeholderClassNames="w-[200px] h-[220px] hidden md:inline-block"
        gridClassNames="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6 4xl:grid-cols-6 gap-y-4"
        type="project"
        isLoading={ownedProjectsLoading}
      /> */}
      {/* Pagination Controls */}
      {/* {!ownedProjectsLoading && projectsToShow?.length > 0 && (
        <CardGridPagnition
          currentPage={currentPage}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
        />
      )} */}
    </>
  )
}

ProjectsPage.getLayout = (page: React.ReactElement) => {
  return (
    <PortalLayout>
      <MainLayout>{page}</MainLayout>
    </PortalLayout>
  )
}
