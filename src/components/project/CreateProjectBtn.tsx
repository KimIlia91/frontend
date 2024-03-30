'use client';

import Link from 'next/link'
import { Button } from '@/components/ui/button'

const CreateProjectBtn = () => {
  const onClick = () => {
    console.log('Click')
  }

  return (
    <Button className='mb-10' onClick={onClick}>
      <Link href='/project/create'>
        Добавить проект
      </Link>
    </Button>
  )
}

export default CreateProjectBtn