import { getProjects } from '@/actions/getProjects';
import { auth } from '@/auth';
import ProjectList from '@/components/project/ProjectList';

const PorjectsPage = async() => {
  const session = await auth()
  let data = undefined;

  if (session?.user.isAdmin) {
    data = await getProjects()
  }

  return (
    data &&
    <section className='flex justify-center items-center'>
      <ProjectList projects={data}/>
    </section>
  )
}

export default PorjectsPage