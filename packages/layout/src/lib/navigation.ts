import {
  AgentIcon,
  ExploreIcon,
  HomeIcon,
  ProjectIcon,
} from '@magickml/icons'
import { Role } from '@magickml/portal-config'

export type Route = {
  name: string
  href: string
  icon: string
  enabled: boolean | string
}

// Role-based route configuration
export const rolesConfig: Record<Role, string[]> = {
  ANONYMOUS: ['home'],
  USER: ['home', 'agents'],
  TESTER: ['home', 'agents', 'projects'],
  ADMIN: ['home', 'agents', 'projects'],
}

export const allRoutes: Record<string, any> = {
  home: {
    name: 'Home',
    href: '/',
    icon: '/images/icons/home.svg',
    enabled: true,
    Iicon: HomeIcon,
  },
  explore: {
    name: 'Explore',
    href: '/explore',
    icon: '/images/icons/community.svg',
    enabled: false,
    Iicon: ExploreIcon,
  },
  agents: {
    name: 'Agents',
    href: '/agents',
    icon: '/images/icons/agents.svg',
    enabled: true,
    Iicon: AgentIcon,
  },
  projects: {
    name: 'Projects',
    href: '/projects',
    icon: '/images/icons/project-light.svg',
    enabled: true,
    Iicon: ProjectIcon,
  },
}

// Function to generate navigation based on role
export const getNavigationForRole = (role: Role): Route[] =>
  rolesConfig[role].map(routeKey => allRoutes[routeKey])

export const secondaryNavigation = [
  {
    name: 'Tutorials',
    id: 'academy',
    href: '/academy',
    icon: '/images/icons/tutorials.svg',
    enabled: true,
    phogId: 'tutorials_click',
  },
  {
    name: 'Read our Docs',
    id: 'read-our-docs',
    href: 'https://magick-docs.vercel.app/',
    icon: '/images/icons/docs.svg',
    enabled: true,
    newTab: true,
    phogId: 'docs_click',
  },
  {
    name: 'FAQs & Updates',
    id: 'faqs-updates',
    href: '/updates',
    icon: '/images/icons/faq.svg',
    enabled: false,
    phogId: 'faqs_click',
  },
  {
    name: 'Join our Discord',
    id: 'join-our-discord',
    href: 'https://bit.ly/magick-discord-cloud',
    icon: '/images/icons/discord-light.svg',
    enabled: true,
    newTab: true,
    phogId: 'join_discord',
  },
]

export const filteredSecondaryNavigation = secondaryNavigation.filter(
  item => item.enabled
)
