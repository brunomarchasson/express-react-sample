import clsx from 'clsx';
import React from 'react';
import style from './style.module.scss';
// type Props = {}

function AuthLayout({ children }: React.PropsWithChildren) {
  return <div className={clsx('card-3d-wrap', style.cardWrap)}>{children}</div>;
}

export default AuthLayout;
