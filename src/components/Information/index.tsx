import { FC } from 'react'
import { text } from '../../utils/constans'
import InfoItem from './InfoItem'
import styles from './Information.module.scss'

interface InformationProps {
  lang: boolean
}

const Information: FC<InformationProps> = ({ lang }) => {
  return (
    <div className={styles.Information}>
      <div className="container">
        <div className={styles.inner}>
          {lang ? (
            <InfoItem
              title={text[0].title}
              body={text[0].body}
              stack={text[0].stack}
            />
          ) : (
            <InfoItem
              title={text[1].title}
              body={text[1].body}
              stack={text[1].stack}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default Information
