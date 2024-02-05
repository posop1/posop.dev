import { FC } from 'react'
import { projects } from '../../constants/common'
import { ProjectList } from './ProjectList'
import styles from './Projects.module.scss'

export const Projects: FC = () => {
  return (
    <div className={styles.Projects}>
      <ProjectList projects={projects} />
    </div>
  )
}
