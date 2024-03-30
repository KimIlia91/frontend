'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Input } from '@/components/ui/input';

const PasswordInput = ({field}: {field: any}) => {
    const [isShowPassword, setIsShowPassword] = useState(false);
  
    const onShowPassword = () => {
      setIsShowPassword(show => !show);
    }
  
    return(
      <div className='relative'>
        <Input 
          {...field}
          placeholder='Пароль'
          typeof='password'
          type={isShowPassword ? 'text' : 'password'}
        />
        <button
          onClick={onShowPassword}
          type="button"
          className="absolute top-[50%] translate-y-[-50%] right-4"
        >
          {isShowPassword ? (
            <Image
              src="/images/eye-open.svg"
              alt="eye opne"
              width={20}
              height={20}
            />
          ) : (
            <Image
              src="/images/eye-close.svg"
              alt="eye close"
              width={20}
              height={20}
            />
          )}
        </button>
      </div>
    )
}


export default PasswordInput;