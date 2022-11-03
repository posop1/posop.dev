import { FC } from 'react'
import { FaGithub } from 'react-icons/fa'
import { MdWebAsset } from 'react-icons/md'
import { IProjectItem } from '../../../types'
import styles from './ProjectItem.module.scss'

const ProjectItem: FC<IProjectItem> = ({ name, description, stack, hrefGit, hrefSite }) => {
  return (
    <div className={styles.ProjectItem}>
      <div className={styles.info}>
        <h4>{name}</h4>
        <p className={styles.description}>{description}</p>
        <p className={styles.stack}>{stack}</p>
      </div>
      <div className={styles.links}>
        <a
          target="_blank"
          href={hrefGit}
          className={styles.project__link}
        >
          <FaGithub size={'28px'} />
        </a>
        {hrefSite && (
          <a
            target="_blank"
            href={hrefSite}
            className={styles.project__link}
          >
            <MdWebAsset size={'28px'} />
          </a>
        )}
      </div>
    </div>
  )
}

export default ProjectItem
