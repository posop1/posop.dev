import { FC } from 'react'
import { FaGithub } from 'react-icons/fa'
import { IProjectItem } from '../../../types'
import styles from './ProjectItem.module.scss'

const ProjectItem: FC<IProjectItem> = ({ name, description, stack, href }) => {
  return (
    <div className={styles.ProjectItem}>
      <div className={styles.info}>
        <h4>{name}</h4>
        <p>{description}</p>
        <p className={styles.stack}>{stack}</p>
      </div>

      <a
        target="_blank"
        href={href}
        className={styles.project__link}
      >
        <FaGithub size={'28px'} />
      </a>
    </div>
  )
}

export default ProjectItem
