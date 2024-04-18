import { SpellInterfaceWithGraph } from 'server/schemas'
import { TemplateGetStaticProps } from '../template-page-isr'
import { TemplatePageHeader } from './template-page-header'
import { TemplatePageSubHeader } from './template-page-subheader'
import dynamic from 'next/dynamic'
import { useRef, useState } from 'react'
import { cn } from '@magickml/client-ui'

type TemplatePageMainProps = {
  template: TemplateGetStaticProps['template']
}

export const TemplatePageMain = (props: TemplatePageMainProps) => {
  const { template } = props
  const [activeSpell, setActiveSpell] = useState<
    SpellInterfaceWithGraph | null | undefined
  >(template?.templateVersions?.[0].spells?.[0])

  const spells = template?.templateVersions?.[0].spells as
    | SpellInterfaceWithGraph[]
    | undefined
    | null

  const parentRef = useRef<HTMLDivElement>(null)

  const ReadOnlyFlow = dynamic(
    () => import('@magickml/flow-core').then(mod => mod.ReadOnlyFlow),
    {
      ssr: false,
      loading: () => (
        <object
          type="image/svg+xml"
          data="/images/loading.svg"
          aria-label="loading..."
          className="w-full h-full max-h-96 bg-ds-card-alt"
        ></object>
      ),
    }
  )

  return (
    <main className="w-full px-10 items-start gap-8 flex flex-col">
      <TemplatePageHeader template={template} />

      <TemplatePageSubHeader template={template} />
      {/* List spell names */}

      <div
        ref={parentRef}
        className="w-full h-full max-h-[400px] max-w-7xl bg-ds-card-alt rounded-[5px] border border-ds-primary-m dark:ds-primary-p overflow-hidden"
      >
        {spells && (
          <div className="overflow-hidden border-ds-neutral inline-flex items-center justify-start w-full bg-ds-card h-6 border-b">
            <span className="flex items-center border-r border-r-ds-neutral overflow-hidden justify-start max-w-fit h-12 px-4 font-medium">
              <p className="text-ellipsis text-nowrap">Spells</p>
            </span>
            {spells.map(spell => (
              <span
                key={spell.id}
                className={cn(
                  'flex items-center border-r font-light border-r-ds-neutral overflow-hidden justify-start max-w-fit h-12 px-4 text-ds-neutral',
                  {
                    'text-ds-primary': activeSpell?.id === spell.id,
                    '': activeSpell?.id === spell.id,
                  }
                )}
                onClick={() => setActiveSpell(spell)}
              >
                <p className="text-ellipsis text-nowrap">{spell.name}</p>
              </span>
            ))}
          </div>
        )}

        {activeSpell ? (
          <ReadOnlyFlow
            spell={activeSpell}
            windowDimensions={{ width: 1280, height: 400 }}
            parentRef={parentRef}
          />
        ) : (
          <div className="flex items-center justify-center w-full h-full text-ds-primary-m dark:text-ds-primary-p">
            No spell found
          </div>
        )}
      </div>
    </main>
  )
}
