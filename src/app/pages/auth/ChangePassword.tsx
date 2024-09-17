import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { useData } from '../../services/api/useData';
import AuthLayout from './AuthLayout';
import style from './style.module.scss';
import { clsx } from 'clsx';
import { SubmitHandler, useForm } from 'react-hook-form';
import { PasswordInput } from './PasswordInput';

type Inputs = {
  password: string;
  password2: string;
};

function ChangePassword() {
  //   const toaster = useToast((s) => s.toaster);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    mode: 'all',
  });
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');
  const [{ isLoading, isError, data }] = useData('api/v1/me', {
    headers: { Authorization: `Bearer ${token}` },
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    // login(data.email, data.password);
    console.log(data);
  };

  console.log(isLoading, isError, data);
  const renderContent = () => {
    if (isError)
      return (
        <div className={style.form}>
          <p className={style.error}>invalidLink</p>
        </div>
      );
    return (
      <form onSubmit={handleSubmit(onSubmit)} className={clsx(style.form)}>
        <h1>Change password</h1>
        <div className={style.formLayout}>
          <div className="form-input-material">
            <PasswordInput
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
          <div className="form-input-material">
            <PasswordInput
              id="password2"
              className="form-control-material"
              placeholder=" "
              {...register('password2', {
                required: {
                  value: true,
                  message: 'Password2 is required',
                },
              })}
            />
            <label htmlFor="password2" data-tooltip={errors.password2?.message}>
              password2
            </label>
          </div>
        </div>
        <button className="btn btn-primary btn-ghost" type="submit">
          {'reset my password'}
        </button>
      </form>
    );
  };
  return (
    <AuthLayout>
      <div className={clsx(style.card)}>
        <h1>Change password</h1>
        {renderContent()}
      </div>
    </AuthLayout>
  );
}

export default ChangePassword;
