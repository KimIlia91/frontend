'use client';

import { Button } from '@/components/ui/button'

interface CreateProjectBtnProps {
  onClick: () => void;
}

const CreateProjectBtn = ({onClick}: CreateProjectBtnProps) => {
  return (
    <>
      <Button className='mb-10' onClick={onClick}>
          Добавить проект
      </Button>
    </>
    
  )
}

export default CreateProjectBtn