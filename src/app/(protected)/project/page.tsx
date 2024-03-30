import { auth } from '@/auth'
import ProjectList from '@/components/project/ProjectList';
import React from 'react'

const PorjectsPage = async() => {
  return (
    <section className='flex justify-center items-center'>
      <ProjectList />
    </section>
  )
}

export default PorjectsPage