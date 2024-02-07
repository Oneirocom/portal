import {
  AgentIcon,
  ExploreIcon,
  HomeIcon,
  ProjectIcon,
  SettingsIcon,
} from '@magickml/portal-ui'
import { Role } from '@magickml/portal-config'
import posthog from 'posthog-js'

export type Route = {
  name: string
  href: string
  icon: string
  enabled: boolean | string
}

let inviteEnabled: boolean | string = false

const getInviteEnabledAsync = async () => {
  return new Promise<boolean>(resolve => {
    posthog.onFeatureFlags(function () {
      if (posthog.isFeatureEnabled('use-invitations')) {
        inviteEnabled = true
      } else {
        inviteEnabled = false
      }
      resolve(inviteEnabled)
    })
  })
}

// Role-based route configuration
export const rolesConfig: Record<Role, string[]> = {
  ANONYMOUS: ['home'],
  USER: ['home', 'agents'],
  TESTER: [
    'home',
    'agents',
    'projects',
    'workspace',
    'interactions',
    'knowledge',
    'money',
  ],
  ADMIN: [
    'home',
    'agents',
    'projects',
    'workspace',
    'interactions',
    'knowledge',
    'money',
  ],
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
    enabled: true,
    Iicon: ExploreIcon,
  },
  interactions: {
    name: 'Interactions',
    href: '/interactions',
    icon: '/images/icons/interactions.svg',
    enabled: false,
  },
  agents: {
    name: 'Agents',
    href: '/agents',
    icon: '/images/icons/agents.svg',
    enabled: true,
    Iicon: AgentIcon,
  },
  knowledge: {
    name: 'Knowledge',
    href: '/knowledge',
    icon: '/images/icons/knowledge.svg',
    enabled: false,
  },
  projects: {
    name: 'Projects',
    href: '/projects',
    icon: '/images/icons/project-light.svg',
    enabled: true,
    Iicon: ProjectIcon,
  },
  settings: {
    name: 'Account',
    href: '/account',
    icon: '/images/icons/settings.svg',
    enabled: true,
    Iicon: SettingsIcon,
  },

  workspace: {
    name: 'Workspace',
    href: '/workspace',
    icon: '/images/icons/mp.svg',
    enabled: inviteEnabled,
  },
  money: {
    name: 'Money',
    href: '/money',
    icon: '/images/icons/money.svg',
    enabled: false,
  },
}

// Function to generate navigation based on role
export const getNavigationForRole = async (role: Role): Promise<Route[]> => {
  await getInviteEnabledAsync() // Wait for inviteEnabled to be updated
  return rolesConfig[role].map(routeKey => allRoutes[routeKey])
}

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
