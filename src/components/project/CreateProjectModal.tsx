'use client';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import CardWrapper from "@/components/auth/card/WrapperCard";
import FormError from '@/components/form/FormError';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from '@/components/ui/form';
import SelectUser from './SelectUser';

interface CreateProjectModalProps {
  isOpenModal: boolean;
  onSubmit: any;
  formControl: any;
  form: any;
  isPending: boolean;
  error: string | undefined;
  accessToken: string;
}

const CreateProjectModal = ({
  isOpenModal,
  onSubmit, 
  formControl,
  form, 
  isPending, 
  error,
  accessToken}: CreateProjectModalProps) => {
  return (
    <CardWrapper 
      isOpenModal={isOpenModal}
      headerLabel="Создать проект" 
      showSocial={false}
    >
      <Form {...form}>
        <form 
          onSubmit={onSubmit}
          className="flex flex-col items-center gap-4 pt-8"
        >
          <FormField 
            control={formControl}
            name="name"
            render={({field}) => (
              <FormItem>
                <FormControl>
                  <Input 
                    {...field}
                    placeholder='Название'
                    typeof='name'
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField 
            control={formControl}
            name="customerCompany"
            render={({field}) => (
              <FormItem>
                <FormControl>
                  <Input 
                    {...field}
                    placeholder='Компания заказчик'
                    typeof='customerCompany'
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField 
            control={formControl}
            name="comapnyExecuter"
            render={({field}) => (
              <FormItem>
                <FormControl>
                  <Input 
                    {...field}
                    placeholder='Компания исполнитель'
                    typeof='comapnyExecuter'
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField 
            control={formControl}
            name="startDate"
            render={({field}) => (
              <FormItem>
                <FormControl>
                  <Input 
                    {...field}
                    placeholder='Начало'
                    typeof='startDate'
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField 
            control={formControl}
            name="endDate"
            render={({field}) => (
              <FormItem>
                <FormControl>
                  <Input 
                    {...field}
                    placeholder='Окончание'
                    typeof='endDate'
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField 
            control={formControl}
            name="priority"
            render={({field}) => (
              <FormItem>
                <FormControl>
                  <Input 
                    {...field}
                    placeholder='Приоритет'
                    typeof='priority'
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField 
            control={formControl}
            name="managerId"
            render={({field}) => (
              <SelectUser 
                fieldOnChange={field.onChange} 
                fieldValue={field.value} 
                placeholder='Выберите менеджера' 
                accessToken={accessToken}
              />
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

export default CreateProjectModal