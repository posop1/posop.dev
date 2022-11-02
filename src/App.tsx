import { useState } from 'react'
import Header from './components/Header'
import Information from './components/Information'
import ProjectsList from './components/ProjectsList'
import './styles/app.scss'

function App() {
  const [lang, setLang] = useState<boolean>(false)

  const changeLang = () => {
    setLang((lang) => (lang = !lang))
  }

  return (
    <div className="App">
      <Header
        lang={lang}
        changeLang={changeLang}
      />
      <div className="main">
        <Information lang={lang} />
        <ProjectsList />
      </div>
    </div>
  )
}

export default App
