import React, { ReactNode } from 'react';
import clsx from 'clsx';
import style from './StateButton.module.scss';
import { ErrorIcon, LoadingIcon, SuccessIcon } from './StateIcons';

export type ButtonState = null | 'wip' | 'confirm' | 'success' | 'error';

const defaultConfirmProps = {};
const defaultSuccessProps = {};
const defaultErrorProps = {};
const defaultLoadingProps = { disabled: true };

interface baseProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children?: ReactNode;
}
interface Props extends baseProps {
  state?: ButtonState;
  confirmProps?: baseProps;
  successProps?: baseProps;
  errorProps?: baseProps;
  loadingProps?: baseProps;
}

const StateButton = React.forwardRef<HTMLButtonElement, Props>(
  (
    {
      state,
      className,
      children,
      confirmProps = defaultConfirmProps,
      successProps = defaultSuccessProps,
      errorProps = defaultErrorProps,
      loadingProps = defaultLoadingProps,
      ...props
    }: Props,
    ref,
  ) => {
    const getProps = () => {
      if (state === 'wip') return { ...defaultLoadingProps, ...loadingProps };
      if (state === 'error') return { ...defaultErrorProps, ...errorProps };
      if (state === 'success')
        return { ...defaultSuccessProps, ...successProps };
      if (state === 'confirm')
        return { ...defaultConfirmProps, ...confirmProps };
      return {};
    };

    const getIcon = () => {
      console.log('sd', state);
      if (state === 'wip')
        return loadingProps.children ?? <LoadingIcon size={'1em'} />;
      if (state === 'error')
        return errorProps.children ?? <ErrorIcon size={'1em'} />;
      if (state === 'success')
        return successProps.children ?? <SuccessIcon size={'1em'} />;
      if (state === 'confirm') return confirmProps.children ?? 'Sure ?';
      return null;
    };

    return (
      <button
        ref={ref}
        className={clsx('btn', style.button, className, {
          loading: state === 'wip',
          success: state === 'success',
          error: state === 'error',
          confirm: state === 'confirm',
        })}
        {...props}
        {...getProps()}
      >
        <span></span>
        {children}
        <span className={style.endIcon}>{getIcon()}</span>
      </button>
    );
  },
);

export default StateButton;
