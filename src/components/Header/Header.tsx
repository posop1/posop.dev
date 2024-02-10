import { motion } from 'framer-motion'
import { FC, useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs'
import { ThemeContext } from '../../context'
import styles from './Header.module.scss'

export const Header: FC = () => {
  const { t, i18n } = useTranslation()
  const { theme, setTheme } = useContext(ThemeContext)

  console.log(i18n)

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
  }

  return (
    <div className={styles.Header}>
      <div className="container">
        <motion.div
          className={styles.inner}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 1
          }}
        >
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
                i18n.language === 'en' ? changeLanguage('ru') : changeLanguage('en')
              }}
            >
              {i18n.language === 'en' ? 'EN' : 'RU'}
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
