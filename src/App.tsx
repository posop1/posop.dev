import { useState } from 'react'
import { Header } from './components/Header'
import { Information } from './components/Information'
import { Projects } from './components/Projects'
import { LangContext, ThemeContext } from './context'
import './styles/app.scss'

function App() {
  const [lang, setLang] = useState<boolean>(false)
  const [theme, setTheme] = useState<boolean>(false)

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme
      }}
    >
      <LangContext.Provider
        value={{
          lang,
          setLang
        }}
      >
        <div className={theme ? 'AppLight' : 'AppDark'}>
          <Header />
          <div className="main">
            <Information />
            <Projects />
          </div>
        </div>
      </LangContext.Provider>
    </ThemeContext.Provider>
  )
}

export default App
