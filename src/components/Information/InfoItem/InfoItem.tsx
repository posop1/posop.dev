import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { FaHandPeace } from 'react-icons/fa'
import { stack } from '../../../constants/common'
import styles from './InfoItem.module.scss'

export const InfoItem: FC = () => {
  const { t } = useTranslation()

  return (
    <div className={styles.InfoItem}>
      <div>
        <span>
          <h2 className={styles.title}>
            {t('title')}
            <p>
              <FaHandPeace size={'25px'} />
            </p>
          </h2>
          <p className={styles.maininfo}>{t('body')}</p>
          <p className={styles.stack}>{t('stack')}</p>
          {stack.map((item) => (
            <li
              className={styles.stackitem}
              key={item.text}
            >
              {item.text}
            </li>
          ))}
        </span>
      </div>
    </div>
  )
}
