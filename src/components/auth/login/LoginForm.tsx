'use client';

import * as z from 'zod';
import { useState, useTransition } from 'react';
import  { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { LoginSchema } from '@/schemas';
import { Input } from '@/components/ui/input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from '@/components/ui/form';

import CardWrapper from "@/components/auth/card/WrapperCard";
import { Button } from '@/components/ui/button';
import FormError from '@/components/form/FormError';
import { login } from '@/actions/login';
import PasswordInput from '@/components/auth/card/PasswordInput';

const LoginForm = () => {
  const [error, setError] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();


  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    }
  })

  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
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
      headerLabel="Вход" 
      showSocial={true}
      isPending={isPending}
    >
      <Form {...form}>
        <form 
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col items-center gap-4 pt-8"
        >
          <FormField 
            control={form.control}
            name="email"
            render={({field}) => (
              <FormItem>
                <FormControl>
                  <Input 
                    {...field}
                    placeholder='Email'
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
              isPending ? "Отправка..." : "Войти"
            }
          </Button>
        </form>
      </Form>
    </CardWrapper>
  )
}

export default LoginForm