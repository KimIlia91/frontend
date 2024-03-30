'use client';

import * as z from 'zod';
import { useState, useTransition } from 'react';
import  { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { RegisterSchema } from '@/schemas';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from '@/components/ui/form';

import CardWrapper from "@/components/auth/card/WrapperCard";
import PasswordInput from '@/components/auth/card/PasswordInput';
import FormError from '@/components/form/FormError';
import { login } from '@/actions/login';

const RegisterForm = () => {
    const [error, setError] = useState<string | undefined>("");
    const [isPending, startTransition] = useTransition();
  
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
  
    const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
      setError("");
  
      startTransition(() => {
        login(values)
          .then((data) => {
            setError(data?.error);
          })
      })
    }
  
    return (
      <CardWrapper 
        headerLabel="Добавить сотрудника" 
        showSocial={false}
      >
        <Form {...form}>
          <form 
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col items-center gap-4 pt-8"
          >
            <FormField 
              control={form.control}
              name="lastName"
              render={({field}) => (
                <FormItem>
                  <FormControl>
                    <Input 
                      {...field}
                      placeholder='Фамилия'
                      typeof='lastName'
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField 
              control={form.control}
              name="firstName"
              render={({field}) => (
                <FormItem>
                  <FormControl>
                    <Input 
                      {...field}
                      placeholder='Имя'
                      typeof='firstName'
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField 
              control={form.control}
              name="surname"
              render={({field}) => (
                <FormItem>
                  <FormControl>
                    <Input 
                      {...field}
                      placeholder='Отчетсво'
                      typeof='surname'
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField 
              control={form.control}
              name="email"
              render={({field}) => (
                <FormItem>
                  <FormControl>
                    <Input 
                      {...field}
                      placeholder='Электронная почта'
                      typeof='email'
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField 
              control={form.control}
              name="password"
              render={({field}) => (
                <FormItem>
                  <FormControl>
                    <PasswordInput field={field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormError message={error} />
            <Button
              disabled={isPending}
              type='submit'
              className='w-full'
              variant="login"
              size="login"
            >
              {
                isPending ? "Отправка..." : "Создать"
              }
            </Button>
          </form>
        </Form>
      </CardWrapper>
    )
}

export default RegisterForm