import React, { ReactElement, useState } from 'react';
import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm';
import clsx from 'clsx';
import style from './style.module.scss';

function AuthPage(): ReactElement {
  const [isRegisterMode, setIsRegisterMode] = useState(false);

  return (
    <div className="card p-9 shadow-xl">
      <div className={clsx('card-3d-wrap', style.cardWrap)}>
        <div className="card-3d-wrapper" data-flip={isRegisterMode}>
          <div className={clsx('card-front', style.card)}>
            <LoginForm />

            <div className="alert alert-info">
              You don't have an account ?
              <button
                className="btn btn-info btn-ghost"
                onClick={() => setIsRegisterMode((cur) => !cur)}
              >
                Register
              </button>
            </div>
          </div>
          <div className={clsx('card-back', style.card)}>
            <RegistrationForm />
            <div className="alert alert-info">
              Already have an account ?
              <button
                className="btn btn-info btn-ghost"
                onClick={() => setIsRegisterMode((cur) => !cur)}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthPage;
