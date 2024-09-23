import React from 'react';
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { AnyZodObject } from 'zod';

interface FormProps<T extends FieldValues> extends React.PropsWithChildren {
  onSubmit: SubmitHandler<T>;
  schema: AnyZodObject;
}

export const Form = <T extends FieldValues = FieldValues>({
  children,
  onSubmit,
  schema,
}: FormProps<T>) => {
  const methods = useForm<T>({
    resolver: zodResolver(schema), // Apply the zodResolver
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};

export default Form;
