import { useState } from 'react'
import Header from './components/Header'
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
    </div>
  )
}

export default App
