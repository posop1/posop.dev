import { FaDiscord, FaGithub, FaTelegramPlane } from 'react-icons/fa'
import { ILinks, IText } from '../types'

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

export const projects = [
  {
    title: 'Мои проекты:'
    items: [
      {name: 'RUtest', description: 'testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest', stack: 'test, test, test,  test', href: 'https://google.com'},
      {name: 'RUtest2', description: 'testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest', stack: 'test, test, test,  test', href: 'https://google.com'}
    ]
  },
  {
    title: 'My projects:'
  }
]
