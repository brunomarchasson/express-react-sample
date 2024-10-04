import clsx from 'clsx';
import React from 'react';
import { useController, useFormState } from 'react-hook-form';

interface FormInputProps
  extends React.PropsWithoutRef<JSX.IntrinsicElements['input']> {
  readOnly?: boolean;
  label?: string;
  name: string;
}

export const FormRoleInput = ({
  // label,
  name,
  readOnly,
  ...props
}: FormInputProps) => {
  const d = useFormState();
  const { field } = useController({ name: name, defaultValue: 'DEFAULT_USER' });
  const handleChange = (v: React.FormEvent<HTMLInputElement>) => {
    console.log(v);
    field.onChange(v.currentTarget.checked ? 'ADMIN' : 'DEFAULT_USER');
  };
  return (
    <div className="form-check">
      <input
        id={name}
        readOnly={readOnly}
        className={clsx('form-switch', {
          invalid: !!d.errors[name],
        })}
        placeholder=" "
        type="checkbox"
        {...props}
        {...field}
        onChange={handleChange}
      />
      <label
        className="form-check-label"
        htmlFor={name}
        data-tooltip={d.errors[name]?.message}
      >
        Admin
      </label>
    </div>
  );
};

export default FormRoleInput;
