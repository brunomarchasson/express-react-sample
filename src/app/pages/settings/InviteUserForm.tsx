import React, { ReactElement } from 'react';
import z from 'zod';

import { userInSchema } from '../../../modules/user/user.dto';
import { useToast } from '../../services/toast/store';
import { SubmitHandler } from 'react-hook-form';
import { UserInType } from '../../../comon/types/api';
import Form from '../../components/Forms/Form';
import FormInput from '../../components/Forms/FormInput';
import { ApiHTTPError } from '../../services/api';
import { useNavigate } from 'react-router-dom';
import FormRoleInput from '../../components/Forms/FormRoleInput';
import { useUsersStore } from '../../stores/users.stores';

const schema = userInSchema.extend({
  submit_type: z.string().optional(),
});

function InviteUserForm(): ReactElement {
  const create = useUsersStore((state) => state.create);
  const navigate = useNavigate();
  const toaster = useToast((s) => s.toaster);
  const onSubmit: SubmitHandler<UserInType> = async (data, event) => {
    //   const r = await api.post('users', { json: data }).json<UserDTO>();
    try {
      await create(data);
      toaster.success('invitation send');
      if (event?.nativeEvent?.submitter?.name === 'inviteAndClose') {
        navigate(-1);
      }
    } catch (e) {
      toaster.error((e as ApiHTTPError).clientMessage ?? 'error');
      console.error(e);
    }
  };

  return (
    <Form schema={schema} onSubmit={onSubmit}>
      <FormInput name="name" label="name" autoFocus />
      <FormInput name="email" label="email" />
      <FormRoleInput name="role" label="role" />
      <Form.SubmitButton
        name="inviteAndNew"
        className="btn btn-secondary btn-ghost"
        type="submit"
      >
        {'Invite and new'}
      </Form.SubmitButton>
      <Form.SubmitButton
        name="inviteAndClose"
        className="btn btn-primary btn-ghost"
        type="submit"
      >
        {'Invite and close'}
      </Form.SubmitButton>
    </Form>
  );
}

export default InviteUserForm;
