import { useState } from 'react'
import { api } from '@magickml/portal-api-client'
import { useScreenWidth } from '@magickml/portal-hooks'
import {
  ProjectGrid,
  ProjectGridPagination,
  CreateProjectDialog,
} from '@magickml/portal-ui'
import { ProjectIcon } from '@magickml/client-ui'
import { MainLayout, PortalLayout } from '@magickml/portal-layout'

export const ProjectsPage = () => {
  const createState = useState(false)

  const { data: ownedProjects, isLoading: ownedProjectsLoading } =
    api.projects.getProjects.useQuery()

  const width = useScreenWidth()
  const [currentPage, setCurrentPage] = useState(1)

  const getCardsPerPage = () => {
    let cardsInRow
    if (width >= 1920) cardsInRow = 6
    else if (width >= 1536) cardsInRow = 5
    else if (width >= 1280) cardsInRow = 4
    else if (width >= 1024) cardsInRow = 3
    else if (width >= 768) cardsInRow = 2
    else cardsInRow = 2

    return cardsInRow * 2
  }
  const cardsPerPage = getCardsPerPage() - 1 // Subtracting 1 to account for PlaceholderCard

  const totalProjects = ownedProjects?.length ?? 0
  const totalPages = Math.ceil(totalProjects / cardsPerPage)

  const startIndex = (currentPage - 1) * cardsPerPage
  const endIndex = startIndex + cardsPerPage
  const projectsToShow: any = ownedProjects?.slice(startIndex, endIndex)

  return (
    <>
      <div className="inline-flex w-full p-4">
        <div className="flex-grow" />
        <CreateProjectDialog state={createState} />
      </div>

      <ProjectGrid
        itemsToShow={projectsToShow || []}
        Icon={ProjectIcon}
        setCreateProjectOpen={createState[1]}
        placeholderText="Create New Project"
        placeholderClassNames="w-[200px] h-[220px] hidden md:inline-block"
        gridClassNames="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6 4xl:grid-cols-6 gap-y-4"
        type="project"
        isLoading={ownedProjectsLoading}
      />
      {/* Pagination Controls */}
      {!ownedProjectsLoading && projectsToShow?.length > 0 && (
        <ProjectGridPagination
          currentPage={currentPage}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
        />
      )}
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
