import { FaDiscord, FaGithub, FaTelegramPlane } from 'react-icons/fa'
import { ILinks, IProject, IStackItem } from '../types'

export const stack: IStackItem[] = [
  { text: 'TypeScript, ES6+' },
  { text: 'Vue, NodeJS' },
  { text: 'Vuex' },
  { text: 'SASS, Vuetify' },
  { text: 'ESLint, Prettier' },
  { text: 'Git, GitHub, GitLab' }]

export const socialLinks: ILinks[] = [
  { id: 1, component: FaTelegramPlane, href: 'https://t.me/iamnotadeveloper' },
  { id: 2, component: FaDiscord, href: 'https://discordapp.com/users/470606448368549907/' },
  { id: 3, component: FaGithub, href: 'https://github.com/posop1' }
]

export const projects: IProject[] = [
  {
    id: 1,
    name: 'Posop.dev (this web-site)',
    stack: 'TypeScript, React, SASS, i18n ',
    hrefGit: 'https://github.com/posop1/posop.dev',
    hrefSite: 'https://posop-dev.vercel.app/'
  }
]
