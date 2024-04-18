import { cn } from '@magickml/client-ui'
import type { SvgIconTypeMap } from '@mui/material'
import type { OverridableComponent } from '@mui/material/OverridableComponent'

interface TemplatePageAsideItemProps {
  title: string
  children: React.ReactNode
  noBorder?: boolean
  Icon?:
    | (OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & { muiName: string })
    | React.FC<React.SVGProps<SVGSVGElement>>
}

export const TemplatePageAsideItem = (props: TemplatePageAsideItemProps) => {
  const { title, children, Icon } = props
  return (
    <div
      className={cn(
        'inline-flex justify-between items-center w-full h-fit',
        props.noBorder ? '' : 'border-b border-zinc-600'
      )}
    >
      <p className="inline-flex gap-x-1 text-neutral-400  font-semibold font-['Montserrat']">
        {Icon && <Icon />} {title}
      </p>

      <div className="w-1/2">{children}</div>
    </div>
  )
}
