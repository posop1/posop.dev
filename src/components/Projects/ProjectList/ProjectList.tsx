import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { IProject } from '../../../types'
import { ProjectItem } from '../ProjectItem'
import styles from './ProjectList.module.scss'

interface IProjectList {
  projects: IProject[]
}

export const ProjectList: FC<IProjectList> = ({ projects }) => {
  const { t } = useTranslation()

  return (
    <div className={styles.ProjectList}>
      <div className={styles.inner}>
        <h3 className={styles.title}>{t('projectsTitle')}</h3>
        <div className={styles.list}>
          {projects.map((item) => (
            <ProjectItem
              key={item.id}
              name={item.name}
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
