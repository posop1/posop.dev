import { FaDiscord, FaGithub, FaTelegramPlane } from 'react-icons/fa'
import { ILinks, IProject, IText } from '../types'

export const socialLinks: ILinks[] = [
  { id: 1, component: FaTelegramPlane, href: 'https://t.me/posop1' },
  { id: 2, component: FaDiscord, href: 'https://discordapp.com/users/470606448368549907/' },
  { id: 3, component: FaGithub, href: 'https://github.com/posop1' }
]

export const text: IText[] = [
  {
    title: 'Привет, меня зовут Артур(Posop)',
    body: 'Я 19-летний программист из России г.Нижневартовск. Я заинтересован в Frontend на React и также не много в Backend разработке, на NodeJs.',
    stack: {
      title: 'Мой стэк:',
      stackItem: [
        { text: 'TypeScript' },
        { text: 'React, NodeJs, Express' },
        { text: 'Redux. redux/toolkit' },
        { text: 'SASS, SCSS, styled-components' },
        { text: 'ESLint, Prettier' },
        { text: 'Git, GitHub, GitLab' }]
    }
  },
  {
    title: 'Hello, my name is Artur(Posop)',
    body: "I'm 19 y.o. programmer from Nizhnevartovsk, Russia. I'm interested in Frontend development on React and also I know something about Backend development on NodeJs.",
    stack: {
      title: 'My stack:',
      stackItem: [
        { text: 'TypeScript' },
        { text: 'React, NodeJs, Express' },
        { text: 'Redux. redux/toolkit' },
        { text: 'SASS, SCSS, styled-components' },
        { text: 'ESLint, Prettier' },
        { text: 'Git, GitHub, GitLab' }]
    }
  }
]

export const projects: IProject[] = [
  {
    title: 'Мои проекты',
    items: [
      {
        id: 1,
        name: 'Pomodoro',
        description: 'Просто Помодоро таймер',
        stack: 'TypeScript, React, SASS ',
        hrefGit: 'https://github.com/posop1/pomodoro',
        hrefSite: 'https://pomodoro-fawn.vercel.app/'
      },
      {
        id: 2,
        name: 'MERN Blog',
        description: 'Просто Fullstack блог',
        stack: 'MongoDB, Express, React, NodeJS, Redux/toolki',
        hrefGit: 'https://github.com/posop1/mern-blog'
      },
      {
        id: 3,
        name: 'Web News',
        description: 'Новостной сайт',
        stack: 'Next, React, TypeScript, NEWS-API',
        hrefGit: 'https://github.com/posop1/web-news',
        hrefSite: 'https://web-news-amber.vercel.app/'
      },
      {
        id: 4,
        name: 'eCommerce',
        description: 'Сайт - магазин',
        stack: 'TypeScript, React, Redux, SASS, mockApi',
        hrefGit: 'https://github.com/posop1/eCommerce',
        hrefSite: 'https://e-commerce-posop1.vercel.app/'
      }
    ]
  },
  {
    title: 'My projects',
    items: [
      {
        id: 1,
        name: 'Pomodoro',
        description: "It' simply Pomodoro timer",
        stack: 'TypeScript, React, SASS ',
        hrefGit: 'https://github.com/posop1/pomodoro',
        hrefSite: 'https://pomodoro-fawn.vercel.app/'
      },
      {
        id: 2,
        name: 'MERN Blog',
        description: 'Simply Fullstack blog',
        stack: 'MongoDB, Express, React, NodeJS',
        hrefGit: 'https://github.com/posop1/mern-blog'
      },
      {
        id: 3,
        name: 'Web News',
        description: 'NEws web-site',
        stack: 'Next, React, TypeScript, NEWS-API',
        hrefGit: 'https://github.com/posop1/web-news',
        hrefSite: 'https://web-news-amber.vercel.app/'
      },
      {
        id: 4,
        name: 'eCommerce',
        description: 'Shop - website',
        stack: 'TypeScript, React, Redux, SASS, mockApi',
        hrefGit: 'https://github.com/posop1/eCommerce',
        hrefSite: 'https://e-commerce-posop1.vercel.app/'
      }
    ]
  }
]
