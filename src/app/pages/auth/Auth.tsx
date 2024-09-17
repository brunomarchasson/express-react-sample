import React, { ReactElement } from 'react';
import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm';
import clsx from 'clsx';
import style from './style.module.scss';

interface Props {
  register?: boolean;
}

function AuthPage({ register = false }: Props): ReactElement {
  // const [isRegisterMode, setIsRegisterMode] = useState(register);

  return (
    // <div className="card p-9 shadow-xl">
    <div className={clsx('card-3d-wrap', style.cardWrap)}>
      <div className="card-3d-wrapper" data-flip={register}>
        <div className={clsx('card-front', style.card)}>
          <h1>Login</h1>
          <LoginForm />
        </div>
        <div className={clsx('card-back', style.card)}>
          <h1>Register</h1>
          <RegistrationForm />
        </div>
      </div>
    </div>
    // </div>
  );
}

export default AuthPage;
