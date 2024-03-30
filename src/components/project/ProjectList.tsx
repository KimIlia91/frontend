import ProjectItem from './ProjectItem';
import Project from '@/types/models/ProjectModel';
import { auth } from '@/auth';
import { fetchData } from '@/utils/fetchData';
import CreateProjectBtn from './CreateProjectBtn'

const ProjectList = async() => {
  const session = await auth();

  let data = undefined;

  if (session?.user.isAdmin) {
    data = await fetchData<Project>({
      uri: "project", 
      method: "GET", 
      accessToken: session?.user.accessToken,
    });
  }

  return (
    <div>  
      <CreateProjectBtn />
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5'>
        {
          data && data.map(project => (
            <ProjectItem key={project.id} project={project} />
          ))
        }
      </div>
    </div>
   
  )
}

export default ProjectList