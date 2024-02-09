import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { useAtom } from 'jotai'
import { createProjectOpenAtom, workspaceAtom } from '@magickml/portal-state'
import { api } from '@magickml/portal-api-client'
import { toast } from 'react-hot-toast'
import Image from "next/legacy/image"

type Template = {
  id: number
  name: string
  description: string
  label?: string
}

type ImageMode = 'upload' | 'prompt' | 'icon'

export const NewCreateProject = () => {
  const [workspace] = useAtom(workspaceAtom)
  const templates: Template[] = [
    {
      name: 'Empty',
      id: 0,
      description: 'Start from scratch',
    },
  ]

  const openInNewTab = (url: string) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }
  const [open, setOpen] = useAtom(createProjectOpenAtom)
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [activeTemplate] = useState<number>(templates[0].id)
  const [imageFile, setImageFile] = useState<File | null>(null)
  const utils = api.useContext()
  const [imageMode] = useState<ImageMode>('upload')

  const { mutateAsync: createProject, isLoading: createProjectLoading } =
    api.projects.createProject.useMutation({
      onSuccess: async data => {
        openInNewTab(`/projects/${data.id}`)

        toast.success('Project created!')
        setOpen(false)
        setName('')
        setDescription('')
        setImageFile(null)
        await utils.projects.getProjects.invalidate()
      },
      onError: error => {
        toast.error('Error creating project. Check your image for corruption.')
      },
    })

  const handleCreateProject = async () => {
    let base64Image: string | null = null
    if (imageFile) {
      base64Image = await convertFileToBase64(imageFile)
    }

    await createProject({
      name,
      workspaceId: workspace?.id || '',
      description,
      templateId: activeTemplate,
      base64Image: base64Image as string,
    })
  }

  const convertFileToBase64 = (file: File) => {
    return new Promise<string>((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => resolve(reader.result as string)
      reader.onerror = error => reject(error)
    })
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImageFile(e.target.files ? e.target.files[0] : null)
  }

  const getImageModeLabel = () => {
    switch (imageMode) {
      case 'upload':
        return 'Upload a file'
      case 'prompt':
        return 'Generate an image'
      case 'icon':
        return 'Choose an Icon'
    }
  }

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={setOpen}>
        <div className="fixed inset-0" />

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="fixed inset-y-0 right-0 flex max-w-full pl-10 pointer-events-none sm:pl-16">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-300 sm:duration-500"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-300 sm:duration-500"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="w-screen max-w-xl pointer-events-auto">
                  <form className="flex flex-col h-full overflow-y-scroll border-l-2 shadow-xl dark:bg-[#18181D] bg-[#DCE8ED] border-secondary-main">
                    <div className="flex-1">
                      {/* Header */}
                      <div className="px-4 py-6 bg-secondary-dark sm:px-6">
                        <div className="flex items-start justify-between space-x-3">
                          <div className="space-y-1">
                            <Dialog.Title className="text-base font-semibold leading-6 text-white">
                              Create a new project in {workspace?.name}
                            </Dialog.Title>
                            <p className="text-sm text-secondary-light">
                              Get started by filling in the information below to
                              create your new project.
                            </p>
                          </div>
                          <div className="flex items-center h-7">
                            <button
                              type="button"
                              className="text-black dark:text-white hover:text-secondary-light"
                              onClick={() => setOpen(false)}
                            >
                              <span className="sr-only">Close panel</span>
                              <XMarkIcon
                                className="w-6 h-6"
                                aria-hidden="true"
                              />
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Divider container */}
                      <div className="py-6 space-y-6 sm:space-y-0 sm:divide-y sm:divide-secondary-dark dark:sm:divide-secondary-main sm:py-0">
                        {/* Project name */}
                        <div className="px-4 space-y-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:space-y-0 sm:px-6 sm:py-5">
                          <div>
                            <label
                              htmlFor="project-name"
                              className="block text-sm font-medium leading-6 text-black dark:text-white sm:mt-1.5"
                            >
                              Project name
                            </label>
                          </div>
                          <div className="sm:col-span-2">
                            <input
                              id="name"
                              name="name"
                              className="block w-full p-2 mt-1 magick-input"
                              type="text"
                              placeholder='e.g. "Project Eliza"'
                              onChange={e => setName(e.target.value)}
                              value={name}
                            />
                          </div>
                        </div>

                        {/* Project description */}
                        <div className="px-4 space-y-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:space-y-0 sm:px-6 sm:py-5">
                          <div>
                            <label
                              htmlFor="project-description"
                              className="block text-sm font-medium leading-6 text-black dark:text-white sm:mt-1.5"
                            >
                              Description
                            </label>
                          </div>
                          <div className="sm:col-span-2">
                            <textarea
                              id="description"
                              name="description"
                              rows={3}
                              className="block w-full p-2 mt-1 magick-input"
                              placeholder="Write a short description about your project."
                              onChange={e => setDescription(e.target.value)}
                              value={description}
                            />
                          </div>
                        </div>

                        {/* Project Image Uploader */}
                        <div className="px-4 space-y-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:space-y-0 sm:px-6 sm:py-5">
                          {/* <SimpleTabs
                            tabs={tabs}
                            activeTab={imageTab}
                            setActiveTab={handleTabChange}
                          /> */}
                          <div>
                            <label
                              htmlFor="project-image"
                              className="block text-sm font-medium leading-6 text-black dark:text-white sm:mt-1.5"
                            >
                              Project Image
                            </label>
                            <div className="avatar">
                              <div className="relative w-24 border rounded-xl border-secondary-main ">
                                {imageFile ? (
                                  <Image
                                    src={URL.createObjectURL(imageFile)}
                                    alt="Project Avatar"
                                    width={96}
                                    height={96}
                                    unoptimized
                                    className="object-contain"
                                  />
                                ) : (
                                  <Image
                                    src="/images/magick-icon.png"
                                    alt="Placeholder Avatar"
                                    width={96}
                                    height={96}
                                    unoptimized
                                    className="object-contain"
                                  />
                                )}
                              </div>
                            </div>
                          </div>
                          <div className="sm:col-span-2">
                            <div className="w-full max-w-xs form-control">
                              <label
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                htmlFor="project_image_input"
                              >
                                <span className="text-black label-text dark:text-white">
                                  {getImageModeLabel()}
                                </span>
                              </label>
                              <input
                                type="file"
                                className="magick-input no-focus ring-secondary-main border-secondary-main"
                                id="project_image_input"
                                onChange={handleFileChange}
                                accept="image/*"
                              />
                            </div>
                          </div>
                        </div>

                        {/* Template Picker */}
                        {/* <div className="px-4 space-y-2 sm:grid sm:grid-cols-1 sm:gap-4 sm:space-y-0 sm:px-6 sm:py-5">
                          <fieldset>
                            <legend className="block text-sm font-medium leading-6 dark:text-white text-black sm:mt-1.5">
                              Select a template
                            </legend>
                            <div className="mt-4 border-t border-b divide-y dark:border-secondary-main border-secondary-dark divide-secondary-dark dark:divide-secondary-light">
                              {templates.map((template, templateIdx) => (
                                <div
                                  key={templateIdx}
                                  className="relative flex items-start py-4"
                                >
                                  <div className="flex-1 min-w-0 text-sm leading-6">
                                    <div className="flex items-center justify-between">
                                      <label
                                        htmlFor={`side-${template.id}`}
                                        className="flex items-center font-medium select-none text-secondary-dark dark:text-secondary-light"
                                      >
                                        <input
                                          id={`side-${template.id}`}
                                          name="template"
                                          type="radio"
                                          defaultChecked={template.id === null}
                                          className="w-4 h-4 mr-2 text-secondary-dark dark:text-secondary-main border-main-primary no-focus focus:ring-secondary-main text-md"
                                          onChange={() =>
                                            setActiveTemplate(template.id)
                                          }
                                          value={template.id}
                                          checked={
                                            template.id === activeTemplate
                                          }
                                        />
                                        <div>
                                          {template.name}
                                          <p className="text-sm text-black dark:text-white">
                                            {template.description}
                                          </p>
                                        </div>
                                      </label>
                                      {template.label && (
                                        <span className="inline-flex items-center px-2 py-1 ml-2 text-xs font-medium text-black rounded-md dark:text-white ring-1 ring-inset ring-gray-secondary-highlight">
                                          {template.label}
                                        </span>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </fieldset>
                        </div> */}
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="flex-shrink-0 px-4 py-5 border-t border-main-primary sm:px-6">
                      <div className="flex justify-end space-x-3">
                        <button
                          type="button"
                          className="px-3 py-2 text-sm font-semibold text-white transition-colors duration-200 ease-in-out bg-transparent rounded-md shadow-sm text-secondary-lightest ring-1 ring-inset ring-gray-300 hover:bg-secondary-main/20"
                          onClick={() => setOpen(false)}
                        >
                          Cancel
                        </button>
                        <button
                          className="inline-flex justify-center px-3 py-2 text-sm font-semibold text-black transition-colors duration-200 ease-in-out rounded-md shadow-sm disabled:opacity-25 dark:text-white hover:text-white bg-secondary-main hover:bg-primary-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-transparent"
                          onClick={e => {
                            e.preventDefault()
                            handleCreateProject()
                          }}
                          disabled={name === '' || activeTemplate === null}
                        >
                          {createProjectLoading && (
                            <span className="pr-1 loading loading-spinner loading-xs" />
                          )}
                          Create
                        </button>
                      </div>
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
