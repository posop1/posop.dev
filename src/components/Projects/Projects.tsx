import { motion } from 'framer-motion'
import { FC } from 'react'
import { projects } from '@/data'
import { ProjectList } from './ProjectList'
import styles from './Projects.module.scss'

export const Projects: FC = () => {
  return (
    <motion.div
      className={styles.Projects}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 1
      }}
    >
      <ProjectList projects={projects} />
    </motion.div>
  )
}
