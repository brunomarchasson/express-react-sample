import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import style from './style.module.scss';
import clsx from 'clsx';
import { useAuth } from '../../services/auth/store';

type Inputs = {
  email: string;
  password: string;
};

export default function LoginForm() {
  const login = useAuth((state) => state.signIn);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    mode: 'all',
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    login('toto@tt.com', 'pwd');
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={clsx(style.form)}>
      <h1>Login</h1>
      <div className="form-input-material">
        <input
          id="email"
          className={clsx('form-control-material', { invalid: !!errors.email })}
          placeholder=" "
          {...register('email', {
            required: {
              value: true,
              message: 'Email is required',
            },
            validate: {
              isValidEmail: (value) => {
                console.log('ee, value');
                return (
                  /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                  'Email is not valid'
                );
              },
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
          className="form-control-material"
          placeholder=" "
          {...register('password', {
            required: {
              value: true,
              message: 'Password is required',
            },
          })}
        />
        <label htmlFor="password" data-tooltip={errors.password?.message}>
          password
        </label>
      </div>
      <button className="btn btn-secondary btn-link btn-sm">
        forgot-password ?
      </button>
      <button className="btn btn-primary btn-ghost" type="submit">
        Login
      </button>
    </form>
  );
}
