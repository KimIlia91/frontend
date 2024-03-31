'use client';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import CardWrapper from "@/components/auth/card/WrapperCard";
import PasswordInput from '@/components/auth/card/PasswordInput';
import FormError from '@/components/form/FormError';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from '@/components/ui/form';

interface CreateUserFormProps {
  isOpenModal: boolean;
  onSubmit: any;
  formControl: any;
  form: any;
  isPending: boolean;
  error: string | undefined;
}

const CreateUserForm = ({
  isOpenModal,
  onSubmit, 
  formControl,
  form, 
  isPending, 
  error}: CreateUserFormProps) => {
  return (
    <CardWrapper 
      isOpenModal={isOpenModal}
      headerLabel="Добавить сотрудника" 
      showSocial={false}
    >
      <Form {...form}>
        <form 
          onSubmit={onSubmit}
          className="flex flex-col items-center gap-4 pt-8"
        >
          <FormField 
            control={formControl}
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
            control={formControl}
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
            control={formControl}
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
            control={formControl}
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
            control={formControl}
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
            {isPending ? "Отправка..." : "Создать"}
          </Button>
        </form>
      </Form>
    </CardWrapper>
  )
}

export default CreateUserForm