import clsx from 'clsx';
import React, { ReactElement } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import style from './style.module.scss';

type Inputs = {
  email: string;
  password: string;
};
function RegistrationForm(): ReactElement {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    mode: 'all',
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={clsx(style.form)}>
      <h1>Register</h1>
      <div className="form-input-material">
        <input
          type="email"
          id="email"
          className={clsx('form-control-material', { invalid: !!errors.email })}
          placeholder=" "
          {...register('email', {
            required: true,
            validate: {
              isValidEmail: (value) =>
                /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                'Email is not valid',
            },
          })}
        />
        <label htmlFor="email" data-tooltip={errors.email?.message}>
          email
        </label>
      </div>
      <div className="form-input-material">
        <input
          type="password"
          id="password"
          className={clsx('form-control-material', {
            invalid: !!errors.password,
          })}
          placeholder=" "
          {...register('password', { required: true })}
        />
        <label htmlFor="password" data-tooltip={errors.password?.message}>
          password
        </label>
      </div>
      <button className="btn btn-primary btn-ghost" type="submit">
        Sign up
      </button>
    </form>
  );
}

export default RegistrationForm;
