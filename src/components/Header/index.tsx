import { FC } from 'react'
import styles from './Header.module.scss'

const Header: FC = () => {
  return (
    <div className={styles.Header}>
      <div className="container">
        <div className={styles.inner}>
          <h1>Posop Dev</h1>
          <span className={styles.lang}>EN</span>
        </div>
      </div>
    </div>
  )
}

export default Header
