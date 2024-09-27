import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { useData } from '../../services/api/useData';
import AuthLayout from './AuthLayout';
import style from './style.module.scss';
import { clsx } from 'clsx';
import { SubmitHandler, useForm } from 'react-hook-form';
import { PasswordInput } from './PasswordInput';
import { api } from '../../services/api';
import { useToast } from '../../services/toast/store';
import { GlobalLoader } from '../../services/global-loader/Loader';
import { UserDTO } from '../../../comon/types/api';

type Inputs = {
  password: string;
  confirmPassword: string;
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
  const toaster = useToast((s) => s.toaster);
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');
  const [{ isLoading, isError, data }] = useData<UserDTO>('auth/me', {
    headers: { Authorization: `Bearer ${token}` },
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      await api.post('/api/auth/reset-password', {
        headers: { Authorization: `Bearer ${token}` },
        json: {
          password: data.password,
        },
      });
      toaster.success('password set');
      // login(data.email, data.password);
    } catch (e) {
      console.error(e);
      toaster.error('error');
    }
  };

  const renderContent = () => {
    if (isLoading) return <GlobalLoader.Loader />;
    if (isError)
      return (
        <div className={style.form}>
          <p className={style.error}>invalidLink</p>
        </div>
      );
    return (
      <form onSubmit={handleSubmit(onSubmit)} className={clsx(style.form)}>
        <div className={style.formLayout}>
          <div className="form-input-material">
            {data?.name}
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
