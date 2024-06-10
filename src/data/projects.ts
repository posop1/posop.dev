import { IProject } from '@/types'

export const projects: IProject[] = [
  {
    id: 2,
    name: 'Habbits',
    stack: 'TypeScript, Vue, Pinia, SASS, Docker',
    hrefGit: 'https://github.com/posop1/habbits',
    hrefSite: 'https://habbits-ten.vercel.app/'
  },
  {
    id: 1,
    name: 'Posop.dev (this web-site)',
    stack: 'TypeScript, React, SASS, i18n ',
    hrefGit: 'https://github.com/posop1/posop.dev',
    hrefSite: 'https://posop-dev.vercel.app/'
  },
  {
    id: 3,
    name: 'You Have Keyboard',
    stack: 'PNPM, TypeScript, Vue, Pinia, i18n, Tailwind, Radix-Vue',
    hrefGit: 'https://github.com/posop1/youHaveKeyboard',
    hrefSite: 'https://you-have-keyboard.vercel.app/'
  }
]
