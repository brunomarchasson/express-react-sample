import clsx from 'clsx';
import React, { useState } from 'react';
import { useController, useFormState } from 'react-hook-form';
import { Icon } from '../icons';
import style from './style.module.scss';

interface FormInputProps
  extends React.PropsWithoutRef<JSX.IntrinsicElements['input']> {
  readOnly?: boolean;
  label: string;
  name: string;
}

export const FormPassword = ({
  label,
  name,
  readOnly,
  ...props
}: FormInputProps) => {
  const [visible, setVisible] = useState(false);
  const toggleVisible = () => setVisible((c) => !c);

  const d = useFormState();
  const { field } = useController({ name: name });
  return (
    <div className="form-input-material">
      <input
        id={name}
        readOnly={readOnly}
        className={clsx('form-control-material', {
          invalid: !!d.errors[name],
        })}
        type={visible ? 'text' : 'password'}
        placeholder=" "
        {...props}
        {...field}
      />
      <Icon
        size={14}
        className={style.passwordVisibility}
        onClick={toggleVisible}
        icon={visible ? 'Eye' : 'EyeCrossed'}
      ></Icon>
      <label htmlFor={name} data-tooltip={d.errors[name]?.message}>
        {label}
      </label>
    </div>
  );
};

export default FormPassword;
