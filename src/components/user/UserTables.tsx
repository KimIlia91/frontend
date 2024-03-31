'use client'

import * as z from 'zod'
import { useEffect, useState, useTransition } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Session } from 'next-auth'
import User from './User'
import IUser from '@/types/models/IUser'
import { deleteData } from '@/utils/fetchData'
import CraeteUserBtn from './CraeteUserBtn'
import { RegisterSchema } from '@/schemas'
import { createUser } from '@/actions/createUser';
import CreateUserForm from './CreateUserForm';
import { getUsers } from '@/actions/getUsers'

const UserTables = ({data, session}: {data: IUser[], session: Session | null}) => {
    const [users, setUsers] = useState<IUser[]>([])
    const [error, setError] = useState<string | undefined>("")
    const [isPending, startTransition] = useTransition()
    const [isOpenModal, setIsOpenModal] = useState(false)

    useEffect(() => {
        setUsers(data)
    }, [])

    const onDelete = async(id: string) => {
        const response = await deleteData({
            id: id,
            uri: 'user',
            method: 'DELETE',
            accessToken: session?.user.accessToken,
        })

        if (response?.ok) {
            const updatedUsers = users.filter(user => user.id !== id)
            setUsers(updatedUsers)
        }
    }

    const form = useForm<z.infer<typeof RegisterSchema>>({
        resolver: zodResolver(RegisterSchema),
        defaultValues: {
          lastName: "",
          firstName: "",
          surname: "",
          email: "",
          password: "",
        }
    })

    const onCreate = (values: z.infer<typeof RegisterSchema>) => {
        setError("");

        startTransition(() => {
            createUser(values)
            .then(async (data) => {
                if (!data?.error) {
                    const users = await getUsers()
                    users && setUsers(users)
                    setIsOpenModal(false)
                    form.reset()
                } else {
                    setError(data?.error);
                }
            })
        })
    }

    const onOpenModal = () => {
        setIsOpenModal(isOpen => !isOpen)
    }

    const onUpdate = (id: string) => {
        console.log(id)
    }
    
    return (
        <div className="flex flex-col items-start">
            <CraeteUserBtn onOpenModal={onOpenModal}/> 
            <table className='mt-4'>
                <thead>
                    <tr>
                    <th>firstName</th>
                    <th>lastName</th>
                    <th>surname</th>
                    <th>email</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <User
                            key={user.id}
                            user={user}
                            onDelete={onDelete}
                            onUpdate={onUpdate}
                        />
                    ))}
                </tbody>
            </table>
            <CreateUserForm 
                isOpenModal={isOpenModal}
                onSubmit={form.handleSubmit(onCreate)}
                formControl={form.control}
                form={form}
                isPending={isPending}
                error={error}
            />
        </div>
    )
}

export default UserTables