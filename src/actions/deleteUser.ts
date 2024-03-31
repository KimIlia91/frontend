"use server";

import { auth } from '@/auth'
import { deleteData } from '@/utils/fetchData';

export interface ICreateUser {
    firstName: string;
    lastName: string;
    surname: string;
    email: string;
    password: string;
}

export const deleteUser = async (values: string) => {
    const session = await auth()

    const response = await deleteData({
        id: values,
        uri: 'user',
        method: 'DELETE',
        accessToken: session?.user.accessToken,
    })

    console.log(await response?.json());
    if (!response || !response.ok) {
        return { error: "Ошибка при удалении!" }
    }

    return { error: "" }
}