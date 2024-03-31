import { getProjects, getProjectsOfUser } from '@/actions/getProjects';
import { auth } from '@/auth';
import ProjectList from '@/components/project/ProjectList';

const PorjectsPage = async() => {
  const session = await auth()
  let data = undefined;

  if (session?.user.isAdmin) {
    data = await getProjects()
  } else {
    data = await getProjectsOfUser()
  }

  return (
    data && session &&
    <section className='flex justify-center items-center'>
      <ProjectList projects={data} session={session} />
    </section>
  )
}

export default PorjectsPage