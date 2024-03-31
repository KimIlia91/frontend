'use client'

import { useEffect, useState } from 'react';
import { 
    FormControl, 
    FormItem, 
    FormMessage 
} from '../ui/form'
import { 
    Select, 
    SelectContent, 
    SelectItem, 
    SelectTrigger, 
    SelectValue 
} from '../ui/select'
import IUser from '@/types/models/IUser';
import { fetchData } from '@/utils/fetchData';

interface SelectUserProps {
    fieldOnChange: any;
    fieldValue: any;
    placeholder: string;
    accessToken: string;
}

const SelectUser = ({
    fieldOnChange, 
    fieldValue, 
    placeholder,
    accessToken}: SelectUserProps
    ) => {
    const [users, setUsers] = useState<IUser[]>([]);
    
    const onRequest = async() => {
        const users = await fetchData<IUser>({
            uri: 'user',
            method: 'GET',
            accessToken: accessToken,
        })

        return users
    }

    useEffect(() => {
        onRequest()
            .then((data) =>  data && setUsers(data))
    }, [])
    console.log(users)
    return (
        <FormItem>
            <Select onValueChange={fieldOnChange} defaultValue={fieldValue}>
                <FormControl>
                <SelectTrigger>
                    <SelectValue placeholder={placeholder} />
                </SelectTrigger>
                </FormControl>
                <SelectContent>
                    {users.map((user) => (
                        <SelectItem key={user.id} value={user.id}>
                            {user.lastName} {user.firstName}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
            <FormMessage />
        </FormItem>
    )
}

export default SelectUser