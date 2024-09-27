import React, { ReactElement } from 'react';
import { useData } from '../../services/api/useData';
import Error from '../../components/Error';
import { UserDTO, userInSchema } from '../../../comon/types/api';
import { SubmitHandler } from 'react-hook-form';
import FormInput from '../../components/Forms/FormInput';
import Form from '../../components/Forms/Form';
import { userInType } from '../../../modules/user/user.dto';
import FormAvatar from '../../components/Forms/FormAvatar';
import { useToast } from '../../services/toast/store';
import { api } from '../../services/api';
import { useAuth } from '../../services/auth/store';
import { GlobalLoader } from '../../services/global-loader/Loader';

// type Inputs = UserDTO;

const schema = userInSchema.omit({ role: true });

function MyProfile(): ReactElement {
  const [state] = useData<UserDTO>('auth/me');
  const toaster = useToast((s) => s.toaster);
  const setUserData = useAuth((s) => s.setData);

  const { isLoading, isError } = state;

  const onSubmit: SubmitHandler<userInType> = async (data) => {
    console.log('data', data);
    try {
      const r = await api.put('users/me', { json: data }).json<UserDTO>();
      setUserData(r);
      console.log('rr', r);
      toaster.success('profile updated');
    } catch (e) {
      console.error(e);
      toaster.error('error');
      throw e;
    }
  };

  if (isLoading) return <GlobalLoader.Loader />;
  if (isError) return <Error />;

  return (
    <div>
      <Form schema={schema} onSubmit={onSubmit} data={state?.data ?? undefined}>
        <FormAvatar name="avatar" />
        <FormInput name="name" label="name" />
        <FormInput name="email" label="email" readOnly />
        <Form.SubmitButton className="btn btn-primary btn-ghost" type="submit">
          {'Update'}
        </Form.SubmitButton>
      </Form>
    </div>
  );
}

export default MyProfile;
