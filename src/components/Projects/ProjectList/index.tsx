import { FC } from 'react'
import { IProject } from '../../../types'
import ProjectItem from '../ProjectItem'
import styles from './ProjectList.module.scss'

const ProjectList: FC<IProject> = ({ title, items }) => {
  return (
    <div className={styles.ProjectList}>
      <div className={styles.inner}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.list}>
          {items.map((item) => (
            <ProjectItem
              key={item.id}
              name={item.name}
              description={item.description}
              stack={item.stack}
              hrefGit={item.hrefGit}
              hrefSite={item.hrefSite}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectList
