import React, { useEffect, useState } from 'react';
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
  useFormState,
} from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { AnyZodObject } from 'zod';
import style from './style.module.scss';
import clsx from 'clsx';
import StateButton, { ButtonState } from '../Button/StateButton';
import { useIsMounted } from '../../hooks/useIsMounted';

interface FormProps<T extends FieldValues>
  extends Omit<React.HTMLAttributes<'form'>, 'onSubmit'> {
  onSubmit: SubmitHandler<T>;
  schema: AnyZodObject;
  data?: T;
}

export const Form = <T extends FieldValues = FieldValues>({
  children,
  onSubmit,
  schema,
  className,
  data,
}: FormProps<T>) => {
  const methods = useForm<T>({
    values: data,
    resolver: zodResolver(schema), // Apply the zodResolver
  });

  const s = async (e: React.BaseSyntheticEvent) => {
    console.log(e);
    await methods.handleSubmit(onSubmit)(e);
    methods.reset(undefined, { keepValues: true });
  };

  return (
    <FormProvider {...methods}>
      <form className={clsx(style.form, className)} onSubmit={s}>
        {children}
      </form>
    </FormProvider>
  );
};

Form.SubmitButton = ({
  ...props
}: React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>) => {
  const isMounted = useIsMounted();
  const [state, setState] = useState<ButtonState>(null);
  const d = useFormState();

  useEffect(() => {
    const getState = () => {
      if (d.isSubmitting) return 'wip';
      if (d.isSubmitted && !d.isSubmitSuccessful) return 'error';
      if (d.isSubmitted && d.isSubmitSuccessful) return 'success';
      return null;
    };
    const newState = getState();
    setState(newState);
  }, [d.isSubmitting, d.isSubmitted, d.isSubmitSuccessful]);

  useEffect(() => {
    if (state === 'success') {
      const timeOutId = setTimeout(() => {
        if (isMounted()) setState(null);
      }, 3000);
      return () => {
        console.log('canceled');
        clearTimeout(timeOutId);
      };
    }
    return undefined;
  }, [state]);

  return <StateButton state={state} {...props} disabled={!d.isDirty} />;
};
export default Form;
