"use server"

import { auth } from '@/auth'
import IUser from '@/types/models/IUser'
import { fetchData } from '@/utils/fetchData'

export const getUsers = async () => {
    const session = await auth()

    const data = await fetchData<IUser>({
        uri: "user", 
        method: "GET", 
        accessToken: session?.user.accessToken,
    });

    return data
}