import { FC } from 'react'
import { projects } from '../../utils/constans'
import ProjectList from './ProjectList'
import styles from './Projects.module.scss'

interface ProjectsListProps {
  lang: boolean
}

const Projects: FC<ProjectsListProps> = ({ lang }) => {
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
