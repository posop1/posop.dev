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
    name: 'Pomodoro',
    stack: 'TypeScript, React, SASS ',
    hrefGit: 'https://github.com/posop1/pomodoro',
    hrefSite: 'https://pomodoro-fawn.vercel.app/'
  },
  {
    id: 2,
    name: 'MERN Blog',
    stack: 'MongoDB, Express, React, NodeJS',
    hrefGit: 'https://github.com/posop1/mern-blog'
  },
  {
    id: 3,
    name: 'Web News',
    stack: 'Next, React, TypeScript, NEWS-API',
    hrefGit: 'https://github.com/posop1/web-news',
    hrefSite: 'https://web-news-amber.vercel.app/'
  },
  {
    id: 4,
    name: 'eCommerce',
    stack: 'TypeScript, React, Redux, SASS, mockApi',
    hrefGit: 'https://github.com/posop1/eCommerce',
    hrefSite: 'https://e-commerce-posop1.vercel.app/'
  }
]
