import { FC } from 'react'
import styles from './Header.module.scss'

interface HeaderProps {
  lang: boolean
  changeLang: Function
}

const Header: FC<HeaderProps> = ({ lang, changeLang }) => {
  return (
    <div className={styles.Header}>
      <div className="container">
        <div className={styles.inner}>
          <h1>Posop Dev</h1>
          <button
            className={styles.lang}
            onClick={() => changeLang()}
          >
            {lang ? 'EN' : 'RU'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header
