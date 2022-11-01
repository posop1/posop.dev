import { FC } from 'react'
import { IText } from '../../../types'
import styles from './InfoItem.module.scss'

const InfoItem: FC<IText> = ({ title, body, stack }) => {
  return (
    <div className={styles.InfoItem}>
      <div>
        <span>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.maininfo}>{body}</p>
          <p className={styles.stack}>{stack.title}</p>
          {stack.stackItem.map((item) => (
            <li className={styles.stackitem}>{item.text}</li>
          ))}
        </span>
      </div>
    </div>
  )
}

export default InfoItem
