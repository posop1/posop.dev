import { FC } from 'react'
import { FaDiscord, FaGithub, FaTelegramPlane } from 'react-icons/fa'
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
          <div className={styles.social}>
            <a
              target="_blank"
              href="https://t.me/devllprod"
              className={styles.social__btn}
            >
              <FaTelegramPlane />
            </a>
            <a
              href=""
              className={styles.social__btn}
            >
              <FaDiscord />
            </a>
            <a
              href=""
              className={styles.social__btn}
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Information
