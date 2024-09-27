import clsx from 'clsx';
import React from 'react';
import { useController } from 'react-hook-form';
import style from './style.module.scss';
import AvatarInput from '../FileInput/AvatarInput';

interface Props extends React.PropsWithoutRef<JSX.IntrinsicElements['input']> {
  name: string;
}

export const FormAvatar = ({ name, className, ...props }: Props) => {
  const { field } = useController({ name: name });
  return (
    <AvatarInput
      className={clsx(style.avatar, className)}
      {...props}
      {...field}
    />
  );
};

export default FormAvatar;
