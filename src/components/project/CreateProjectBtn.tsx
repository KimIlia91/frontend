'use client';

import Link from 'next/link'
import React from 'react'
import { Button } from '@/components/ui/button';

const CreateProjectBtn = () => {
  const onClick = () => {
    console.log('Click')
  }

  return (
    <Button className='mb-10' onClick={onClick}>
      Добавить проект
    </Button>
  )
}

export default CreateProjectBtn