import { useState } from 'react'
import { Header } from './components/Header'
import { Information } from './components/Information'
import { Projects } from './components/Projects'
import { ThemeContext } from './context'
import './i18n/i18n'
import './styles/app.scss'

function App() {
  const [theme, setTheme] = useState<boolean>(false)

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme
      }}
    >
      <div className={theme ? 'AppLight' : 'AppDark'}>
        <Header />
        <div className="main">
          <Information />
          <Projects />
        </div>
      </div>
    </ThemeContext.Provider>
  )
}

export default App
