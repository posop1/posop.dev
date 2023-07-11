import { FC, useContext } from 'react'
import { LangContext } from '../../context'
import { projects } from '../../utils/i18n'
import ProjectList from './ProjectList'
import styles from './Projects.module.scss'

const Projects: FC = () => {
  const { lang } = useContext(LangContext)

  return (
    <div className={styles.Projects}>
      {lang ? (
        <ProjectList
          title={projects[0].title}
          items={projects[0].items}
        />
      ) : (
        <ProjectList
          title={projects[1].title}
          items={projects[1].items}
        />
      )}
    </div>
  )
}

export default Projects
