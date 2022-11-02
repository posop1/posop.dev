import { IconType } from 'react-icons/lib'

export interface IText {
  title: string
  body: string
  stack: IStack
}
export interface IStack {
  title: string
  stackItem: IStackItem[]
}
export interface IStackItem {
  text: string
}

export interface ILinks {
  id: number
  component: IconType
  href: string
}

export interface IProject {
  title: string
  items: IProjectItem[]
}
export interface IProjectItem {
  name: string
  description: string
  stack: string
  href: string
}
