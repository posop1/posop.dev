import { createContext } from 'react'
import { ILangContext } from '../types'

export const LangContext = createContext<ILangContext>({
  lang: false,
  setLang: () => {}
})
