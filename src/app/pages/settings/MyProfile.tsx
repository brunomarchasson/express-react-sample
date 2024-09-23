import React, { ReactElement } from 'react';
import { useData } from '../../services/api/useData';
import Loader from '../../components/Loader';
import Error from '../../components/Error';
import { UserDTO, userInSchema } from '../../../comon/types/api';
import { SubmitHandler } from 'react-hook-form';
import FormInput from '../../components/Forms/FormInput';
import Form from '../../components/Forms/Form';
import { userInType } from '../../../modules/user/user.dto';

// type Inputs = UserDTO;

const schema = userInSchema;
function MyProfile(): ReactElement {
  const [state] = useData<UserDTO>('auth/me');

  const { isLoading, isError } = state;
  //   const [files, setFiles] = useState<File[]>([]);
  //   const [file, setFile] = useState<string | null>(null);
  //   const {
  //     register,
  //     handleSubmit,
  //     formState: { errors },
  //   } = useForm<Inputs>({
  //     resolver: zodResolver(schema), // Apply the zodResolver
  //   });

  const onSubmit: SubmitHandler<userInType> = async (data) => {
    console.log(data);
  };

  if (isLoading) return <Loader />;
  if (isError) return <Error />;

  return (
    <div>
      <Form schema={schema} onSubmit={onSubmit}>
        <FormAvatar />
        <FormInput label="email" />
        <button className="btn btn-primary btn-ghost" type="submit">
          {'Login'}
        </button>
      </Form>
      Me
    </div>
  );
}

export default MyProfile;
