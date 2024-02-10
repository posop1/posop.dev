import { motion } from 'framer-motion'
import { FC } from 'react'
import { socialLinks } from '../../constants/common'
import { InfoItem } from './InfoItem'
import styles from './Information.module.scss'

export const Information: FC = () => {
  return (
    <div className={styles.Information}>
      <motion.div
        className={styles.inner}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 1
        }}
      >
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
      </motion.div>
    </div>
  )
}
