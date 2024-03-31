import ProjectItem from './ProjectItem'
import CreateProjectBtn from './CreateProjectBtn'
import Project from '@/types/models/ProjectModel'

interface ProjectListProps {
  projects: Project[];
}

const ProjectList = async({projects}: ProjectListProps) => {

  return (
    <div>  
      <CreateProjectBtn />
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5'>
        {projects.map(project => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </div>
    </div>
   
  )
}

export default ProjectList