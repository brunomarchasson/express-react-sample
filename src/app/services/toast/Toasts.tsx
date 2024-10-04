import React from 'react';
import { useToast } from './store';
import ToastComponent from './Toast';
import style from './style.module.scss';

export const Toasts = () => {
  const toasts = useToast((s) => s.toasts);
  const show = useToast((s) => s.show);

  if (!show) return;
  return (
    <ul className={style.toastsList}>
      {toasts.map((t) => (
        <ToastComponent key={t.id} toast={t} />
      ))}
    </ul>
  );
};

export default Toasts;
