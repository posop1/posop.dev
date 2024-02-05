import { FC, useContext } from 'react'
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs'
import { LangContext, ThemeContext } from '../../context'
import styles from './Header.module.scss'

const Header: FC = () => {
  const { lang, setLang } = useContext(LangContext)
  const { theme, setTheme } = useContext(ThemeContext)

  return (
    <div className={styles.Header}>
      <div className="container">
        <div className={styles.inner}>
          <h1>Posop Dev</h1>
          <div className={styles.btns__container}>
            <button
              className={styles.btn}
              onClick={() => {
                setTheme((theme) => (theme = !theme))
              }}
            >
              {theme ? <BsFillSunFill size={'18px'} /> : <BsFillMoonFill size={'18px'} />}
            </button>
            <hr />
            <button
              className={styles.btn}
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
    </div>
  )
}

export default Header
