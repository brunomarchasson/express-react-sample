import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { useData } from '../../services/api/useData';
import style from './style.module.scss';
import { SubmitHandler } from 'react-hook-form';
import { api } from '../../services/api';
import { useToast } from '../../services/toast/store';
import { GlobalLoader } from '../../services/global-loader/Loader';
import {
  invitationAcceptInSchema,
  invitationAcceptInSchemaType,
  invitationOutType,
} from '../../../comon/types/api';
import Form from '../../components/Forms/Form';
import FormPassword from '../../components/Forms/FormPassword';

const schema = invitationAcceptInSchema;

function Join() {
  const toaster = useToast((s) => s.toaster);
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');
  const [{ isLoading, isError, data }] = useData<invitationOutType>(
    'auth/invitations',
    {
      headers: { Authorization: `Bearer ${token}` },
    },
  );

  const onSubmit: SubmitHandler<invitationAcceptInSchemaType> = async (
    data,
  ) => {
    try {
      await api.post('auth/invitations/accept', {
        headers: { Authorization: `Bearer ${token}` },
        json: {
          password: data.password,
        },
      });
      toaster.success('welcom');
    } catch (e) {
      console.error(e);
      toaster.error('error');
    }
  };

  if (isLoading) return <GlobalLoader.Loader />;
  if (isError)
    return (
      <div className={style.form}>
        <p className={style.error}>invalidLink</p>
      </div>
    );
  return (
    <div className="card">
      <h1>Welcome</h1>
      <Form schema={schema} onSubmit={onSubmit}>
        <p>{`Welcom ${data?.name}`}</p>
        <FormPassword name="password" label="password" />
        <Form.SubmitButton
          className="btn btn-secondary btn-ghost"
          type="submit"
        >
          {'Join now'}
        </Form.SubmitButton>
      </Form>
    </div>
  );
}

export default Join;
