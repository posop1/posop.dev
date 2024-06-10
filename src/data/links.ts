import { FaDiscord, FaGithub, FaTelegramPlane } from 'react-icons/fa'
import { ILinks } from '@/types'

export const socialLinks: ILinks[] = [
  { id: 1, component: FaTelegramPlane, href: 'https://t.me/iamnotadeveloper' },
  { id: 2, component: FaDiscord, href: 'https://discordapp.com/users/470606448368549907/' },
  { id: 3, component: FaGithub, href: 'https://github.com/posop1' }
]
