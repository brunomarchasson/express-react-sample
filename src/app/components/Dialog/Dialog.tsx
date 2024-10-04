import React, { ReactElement } from 'react';
import style from './style.module.scss';
import { Icon } from '../icons';
import { useNavigate } from 'react-router-dom';
import clsx from 'clsx';

export enum onCloseAction {
  back,
  up,
}
interface Props extends React.PropsWithChildren {
  title?: string;
  //   onCloseAction: onCloseAction
  onClose?: onCloseAction | (() => void);
}

function Dialog({ title, onClose, children }: Props): ReactElement {
  const navigate = useNavigate();
  const handleClose = () => {
    if (onClose === onCloseAction.back) return navigate(-1);
    if (onClose === onCloseAction.up) return navigate('..');
    if (typeof onClose === 'function') return onClose();
  };
  return (
    <>
      <div className="backdrop"></div>
      <div className={clsx('card', style['dialog'])}>
        <div className={style.title}>
          <span></span>
          <h1>{title}</h1>
          <button
            className="btn btn-icon btn-primary btn-link"
            onClick={handleClose}
          >
            <Icon icon="SquareX" size="2rem"></Icon>
          </button>
        </div>

        <div className={style.content}>{children}</div>
      </div>
    </>
  );
}

export default Dialog;
