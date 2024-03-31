'use client'

import * as z from 'zod'
import { useState, useTransition } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import ProjectItem from './ProjectItem'
import CreateProjectBtn from './CreateProjectBtn'
import Project from '@/types/models/ProjectModel'
import CreateProjectModal from './CreateProjectModal';
import { CreateProjectSchema, RegisterSchema } from '@/schemas';
import { Session } from 'next-auth';

interface ProjectListProps {
  projects: Project[];
  session: Session;
}

const ProjectList = ({projects, session}: ProjectListProps) => {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [isPending, startTransition] = useTransition()
  const [error, setError] = useState<string | undefined>("")
  
  const onOpenModal = () => {
    console.log('click')
    setIsOpenModal(isOpen => !isOpen)
  }

  const form = useForm<z.infer<typeof CreateProjectSchema>>({
    resolver: zodResolver(CreateProjectSchema),
    defaultValues: {
      customerCompany: '',
      comapnyExecuter: '',
      name: '',
      endDate: new Date,
      startDate: new Date,
      priority: '',
      managerId: ''
    }
  })

  const onCreate = (values: z.infer<typeof CreateProjectSchema>) => {

  }

  return (
    <div>  
      <CreateProjectBtn onClick={onOpenModal} />
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5'>
        {projects.map(project => (
          <ProjectItem key={project.id} project={project} session={session} />
        ))}
      </div>
      <CreateProjectModal 
        isOpenModal={isOpenModal}
        onSubmit={form.handleSubmit(onCreate)} 
        formControl={form.control}
        form={form}
        isPending={isPending}
        error={error}
        accessToken={session?.user?.accessToken}
      />
    </div>
  )
}

export default ProjectList