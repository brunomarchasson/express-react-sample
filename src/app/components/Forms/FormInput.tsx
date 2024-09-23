import clsx from 'clsx';
import React from 'react';
import { useFormState } from 'react-hook-form';

interface FormInputProps
  extends React.PropsWithoutRef<JSX.IntrinsicElements['input']> {
  label: string;
}

export const FormInput = React.forwardRef<HTMLInputElement, FormInputProps>(
  ({ label, ...props }, ref) => {
    const d = useFormState();
    console.log(d);
    return (
      <div className="form-input-material">
        <input
          id="email"
          className={clsx('form-control-material', {
            invalid: !!d.errors.email,
          })}
          placeholder=" "
          {...props}
          ref={ref}
        />
        <label htmlFor="email" data-tooltip={d.errors.email?.message}>
          {label}
        </label>
      </div>
    );
  },
);

export default FormInput;
