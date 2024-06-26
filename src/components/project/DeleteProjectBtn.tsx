'use client';

import Image from 'next/image';
import { deleteData } from '@/utils/fetchData';

const DeleteProjectBtn = ({id, accessToken}: {id: string, accessToken: string}) => {
    const onDelete = () => {
        deleteData({
          id: id,
          uri: "project", 
          method: "DELETE", 
          accessToken: accessToken,
        });
      }

    return (
        <button onClick={onDelete}>
            <Image src="/images/trash.svg" alt="trash" height={20} width={20} />
        </button> 
    )
}

export default DeleteProjectBtn