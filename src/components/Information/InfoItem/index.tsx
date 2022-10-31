import { FC } from 'react'
import { IText } from '../../../types'
import styles from './InfoItem.module.scss'

const InfoItem: FC<IText> = ({ title, body, stack }) => {
  return (
    <div className={styles.InfoItem}>
      <div>
        <span>
          {title},{body}
          {stack.stackItem.map((item) => (
            <li>{item.text}</li>
          ))}
        </span>
      </div>
    </div>
  )
}

export default InfoItem
