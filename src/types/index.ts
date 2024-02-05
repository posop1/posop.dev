import React from 'react'
import { IconType } from 'react-icons/lib'

export interface IStackItem {
  text: string
}

export interface ILinks {
  id: number
  component: IconType
  href: string
}

export interface IProject {
  id?: number
  name: string
  stack: string
  hrefGit: string
  hrefSite?: string
}

export interface IThemeContext {
  theme: boolean
  setTheme: React.Dispatch<React.SetStateAction<boolean>>
}
