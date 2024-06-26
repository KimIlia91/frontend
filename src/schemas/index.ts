import * as z from "zod";

export const LoginSchema = z.object({
    email: z.string().email({
        message: "Неверный формат электронной почты"
    }),
    password: z.string().min(6, {
        message: "Минимальное количество символов 6"
    }),
});

export const RegisterSchema = z.object({
    firstName: z.string().min(1, {
        message: "Обязательное поле"
    }).max(255, {
        message: "Максимальное количество символов 255"
    }),
    lastName: z.string().min(1, {
        message: "Обязательное поле"
    }).max(255, {
        message: "Максимальное количество символов 255"
    }),
    surname: z.string(),
    email: z.string().email({
        message: "Неверный формат электронной почты"
    }),
    password: z.string().min(6, {
        message: 'Минимальное количество символов 6'
    }),
})

export const CreateProjectSchema = z.object({
    name: z.string()
        .min(1, {message: "Обязательное поле"})
        .max(255, {message: "Максимальное количество символов 255"}),
    customerCompany: z.string()
        .min(1, {message: "Обязательное поле"})
        .max(255, {message: "Максимальное количество символов 255"}),
    comapnyExecuter: z.string()
        .min(1, {message: "Обязательное поле"})
        .max(255, {message: "Максимальное количество символов 255"}),
    startDate: z.date(),
    endDate: z.date(),
    priority: z.string(),
    managerId: z.string(),
})