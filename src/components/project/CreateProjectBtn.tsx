'use client';

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { useState } from 'react';

const CreateProjectBtn = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const onClick = () => {
    console.log('Click')
  }

  return (
    <>
      {/* <Button className='mb-10' onClick={onClick}>
          Добавить проект
      </Button> */}
      <Button className='mb-10' onClick={onClick}>
        <Link href='/project/create'>
          Добавить проект
        </Link>
      </Button>
      <div className={`w-[200px] h-[200px] bg-white ${isOpenModal ? 'block' : 'hidden'}`}>
        modal
      </div>
    </>
    
  )
}

export default CreateProjectBtn