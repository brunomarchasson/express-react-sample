import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import style from './style.module.scss';
import clsx from 'clsx';
import { useAuth } from '../../services/auth/store';
import { useToast } from '../../services/toast/store';
import { PasswordInput } from './PasswordInput';
import { Link } from 'react-router-dom';

type Inputs = {
  email: string;
  password: string;
};

export default function LoginForm() {
  const login = useAuth((state) => state.signIn);
  const forgotPassword = useAuth((state) => state.forgot);
  const [forgot, setForgot] = useState(false);
  const toaster = useToast((s) => s.toaster);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    mode: 'all',
  });

  const toggleForgort = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setForgot((c) => !c);
  };
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    if (forgot) {
      try {
        await forgotPassword(data.email);
        toaster.info('check your emails');
      } catch (e) {
        toaster.error('error');
        console.error(e);
      }
    }
    try {
      await login(data.email, data.password);
    } catch (e) {
      toaster.error('error');
      console.error(e);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className={clsx(style.form)}>
        <div className="form-input-material">
          <input
            id="email"
            className={clsx('form-control-material', {
              invalid: !!errors.email,
            })}
            placeholder=" "
            {...register('email', {
              required: {
                value: true,
                message: 'Email is required',
              },
              validate: {
                isValidEmail: (value) => {
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

        <div className={clsx('collapse__wrapper', { 'is-open': !forgot })}>
          <div className="collapse__inner">
            <div className="form-input-material">
              <PasswordInput
                id="password"
                className="form-control-material"
                placeholder=" "
                {...register('password', {
                  required: {
                    value: !forgot,
                    message: 'Password is required',
                  },
                })}
              />
              <label htmlFor="password" data-tooltip={errors.password?.message}>
                password
              </label>
            </div>
          </div>
        </div>

        <button className="btn btn-primary btn-ghost" type="submit">
          {forgot ? 'reset my password' : 'Login'}
        </button>
      </form>
      <div className={clsx('alert', style.helper)}>
        {forgot ? 'Have an account ?' : 'Forgot your password ?'}
        <button className="btn btn-secondary btn-link" onClick={toggleForgort}>
          {forgot ? 'Login' : 'reset my password'}
        </button>
        You don't have an account ?
        <Link
          to="/register"
          className="btn btn-secondary btn-link"
          // onClick={() => setIsRegisterMode((cur) => !cur)}
        >
          Register
        </Link>
      </div>
    </>
  );
}
