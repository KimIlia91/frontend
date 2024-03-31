import Image from 'next/image'
import { Card } from '@/components/ui/card'
import Project from '@/types/models/ProjectModel'
import { getDate } from '@/utils/dateHelper'
import { auth } from '@/auth';
import DeleteProjectBtn from './DeleteProjectBtn';

const ProjectItem = async({ project }: { project: Project | undefined }) => {
  const session = await auth();

  return (
    project &&
    <Card className='relative w-[340px] sm:w-[370px] h-[200px] border-2 border-black rounded-2xl p-6 overflow-hidden z-10'>
      <h3 className=" text-center text-xl text-black">
        {project.name}
      </h3>
      <div className="absolute w-full h-10 bottom-0 left-0 flex justify-between items-center p-7 z-20">
        {
          session?.user?.isAdmin ?
          <DeleteProjectBtn id={project.id} accessToken={session?.user?.accessToken} /> : null
        }
        <div className='flex flex-col items-start'>
          <p className="text-black">Начало {getDate(project.startDate.toString())}</p>
          <p className="text-black">Конец {getDate(project.endDate.toString())}</p>
        </div>
      </div>
      <div className=" bg-black opacity-10 w-full h-10 absolute bottom-0 left-0 p-7 z-10"></div>
      <Image 
        src="/images/project-card.png" 
        alt="project image" 
        width={370} 
        height={200} 
        className=" absolute w-full h-full top-0 left-0 opacity-50 -z-10" 
      />
    </Card>
  )
}

export default ProjectItem