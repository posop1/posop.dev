import { FC } from 'react'
import { socialLinks } from '../../constants/common'
import { InfoItem } from './InfoItem'
import styles from './Information.module.scss'

export const Information: FC = () => {
  return (
    <div className={styles.Information}>
      <div className={styles.inner}>
        <InfoItem />
        <div className={styles.social}>
          {socialLinks.map((link) => (
            <a
              target="_blank"
              href={link.href}
              key={link.id}
              className={styles.social__btn}
            >
              <link.component />
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
