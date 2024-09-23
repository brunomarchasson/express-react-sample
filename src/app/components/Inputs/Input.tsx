import clsx from 'clsx';
import React from 'react';

interface Props
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  invalid: boolean;
}

function Input({ invalid, ...props }: Props) {
  return (
    <input
      className={clsx('form-control-material', {
        invalid: invalid,
      })}
      placeholder=" "
      {...props}
    />
  );
}

export default Input;
