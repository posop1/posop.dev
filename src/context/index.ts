import { createContext } from 'react'
import { ILangContext, IThemeContext } from '../types'

export const LangContext = createContext<ILangContext>({
  lang: false,
  setLang: () => {}
})

export const ThemeContext = createContext<IThemeContext>({
  theme: false,
  setTheme: () => {}
})
