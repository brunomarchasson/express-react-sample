import React, { useState } from 'react';
import style from './style.module.scss';
import { Icon } from '../../components/icons';

export const PasswordInput = React.forwardRef<
  HTMLInputElement,
  React.ComponentProps<'input'>
>((props, ref) => {
  const [visible, setVisible] = useState(false);
  const toggleVisible = () => setVisible((c) => !c);
  return (
    <>
      <input {...props} ref={ref} type={visible ? 'text' : 'password'}></input>
      <Icon
        size={14}
        className={style.passwordVisibility}
        onClick={toggleVisible}
        icon={visible ? 'Eye' : 'EyeCrossed'}
      ></Icon>
    </>
  );
});
