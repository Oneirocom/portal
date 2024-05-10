import type { SvgIconTypeMap } from '@mui/material'
import type { OverridableComponent } from '@mui/material/OverridableComponent'
import { TarotCardsIcon } from './Header/tarot-card-icon'
import { SmartToyOutlined, Chat } from '@mui/icons-material'
import { Eclipse } from 'lucide-react'

export interface NavigationV2Item {
  name: string
  href: string
  enabled: boolean
  Icon:
    | (OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & { muiName: string })
    | React.FC<React.SVGProps<SVGSVGElement>>
}

export const baseNavigation: NavigationV2Item[] = [
  {
    name: 'Templates',
    href: '/templates',
    enabled: true,
    Icon: TarotCardsIcon,
  },
]

export const userNavigation: NavigationV2Item[] = [
  {
    name: 'My Agents',
    href: '/',
    enabled: true,
    Icon: SmartToyOutlined,
  },
]

export const adminNavigation: NavigationV2Item[] = [
  {
    name: 'Projects',
    href: '/projects',
    enabled: true,
    Icon: TarotCardsIcon,
  },
  {
    name: 'Chat',
    href: '/hm',
    enabled: true,
    Icon: Chat,
  },
]
