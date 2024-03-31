"use server";

import * as z from 'zod'
import { RegisterSchema } from '@/schemas'
import { auth } from '@/auth'
import { postData } from '@/utils/fetchData';

export interface ICreateUser {
    firstName: string;
    lastName: string;
    surname: string;
    email: string;
    password: string;
}

export const createUser = async (values: z.infer<typeof RegisterSchema>) => {
    const validatedFields = RegisterSchema.safeParse(values)
    const session = await auth()

    if (!validatedFields.success) {
        return { error: "Неверные поля!" }
    }

    const response = await postData<ICreateUser>('user', {
            firstName: values.firstName,
            lastName: values.lastName,
            surname: values.surname,
            password: values.password,
            email: values.email,
        }, 
        session?.user.accessToken,
    )
        console.log(await response?.json());
    if (!response || !response.ok) {
        return { error: "Ошибка при добавлении пользователя поробуйте позже!" }
    }

    return { error: "" }
}