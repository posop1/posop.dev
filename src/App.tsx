import { useState } from 'react'
import Header from './components/Header'
import Information from './components/Information'
import Projects from './components/Projects'
import { LangContext } from './context'
import './styles/app.scss'

function App() {
  const [lang, setLang] = useState<boolean>(false)

  return (
    <LangContext.Provider
      value={{
        lang,
        setLang
      }}
    >
      <div className="App">
        <Header />
        <div className="main">
          <Information />
          <Projects />
        </div>
      </div>
    </LangContext.Provider>
  )
}

export default App
