import { Badge } from '@magickml/client-ui'

type Props = {
  text: string
}

export const AgentCardBadge = (props: Props) => {
  return (
    <Badge
      className="w-28 h-9 inline-flex justify-center absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
  text-center bg-ds-primary-m text-black text-sm font-normal font-montserrat"
    >
      {props.text}
    </Badge>
  )
}
