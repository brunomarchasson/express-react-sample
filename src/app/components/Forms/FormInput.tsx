import clsx from 'clsx';
import React from 'react';
import { useController, useFormState } from 'react-hook-form';

interface FormInputProps
  extends React.PropsWithoutRef<JSX.IntrinsicElements['input']> {
  readOnly?: boolean;
  label: string;
  name: string;
}

export const FormInput = ({
  label,
  name,
  readOnly,
  ...props
}: FormInputProps) => {
  const d = useFormState();
  const { field } = useController({ name: name });
  return (
    <div className="form-input-material">
      <input
        id="email"
        readOnly={readOnly}
        className={clsx('form-control-material', {
          invalid: !!d.errors[name],
        })}
        placeholder=" "
        {...props}
        {...field}
      />
      <label htmlFor="email" data-tooltip={d.errors[name]?.message}>
        {label}
      </label>
    </div>
  );
};

export default FormInput;
