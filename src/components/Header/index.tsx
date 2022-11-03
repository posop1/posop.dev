import { FC, useContext } from 'react'
import { LangContext } from '../../context'
import styles from './Header.module.scss'

const Header: FC = () => {
  const { lang, setLang } = useContext(LangContext)

  return (
    <div className={styles.Header}>
      <div className="container">
        <div className={styles.inner}>
          <h1>Posop Dev</h1>
          <button
            className={styles.lang}
            onClick={() => {
              setLang((lang) => (lang = !lang))
              console.log(lang)
            }}
          >
            {lang ? 'RU' : 'EN'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header
