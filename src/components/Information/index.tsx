import { FC, useContext } from 'react'
import { LangContext } from '../../context'
import { socialLinks, text } from '../../utils/constans'
import InfoItem from './InfoItem'
import styles from './Information.module.scss'

const Information: FC = () => {
  const { lang } = useContext(LangContext)

  return (
    <div className={styles.Information}>
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

export default Information
