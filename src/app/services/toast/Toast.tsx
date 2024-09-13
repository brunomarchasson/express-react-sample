import React, {
  ReactElement,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
} from 'react';
import { Toast, useToast } from './store';
import style from './style.module.scss';
import clsx from 'clsx';

interface Props {
  toast: Toast;
}

type MountStatus = 'unmounted' | 'initial' | 'open' | 'close';
const useMountStatus = (closing: boolean) => {
  const [mounted, setMounted] = React.useState<boolean>(true);
  const [status, setStatus] = React.useState<MountStatus>('unmounted');
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    setStatus('initial');
    const frame = requestAnimationFrame(() => {
      setStatus('open');
    });

    return () => {
      cancelAnimationFrame(frame);
      setStatus('close');
    };
  }, []);

  useEffect(() => {
    if (closing) close();
  }, [closing]);

  const close = useCallback(() => {
    if (!ref.current) return;
    setStatus('close');
    setMounted(true);
    ref.current.addEventListener('transitionend', () => {
      setStatus('unmounted');
      setMounted(false);
    });
  }, []);
  return { ref, status, mounted, close };
};
export function ToastComponent({ toast }: Props): ReactElement {
  const { closeToast, removeToast, pauseToast, resumeToast } = useToast();
  const { ref, status, mounted } = useMountStatus(toast?.closing ?? false);

  useEffect(() => {
    if (!mounted) removeToast(toast.id);
  }, [mounted]);

  return (
    <div
      ref={ref}
      data-status={status}
      className={clsx(
        'alert',
        {
          'alert-info': toast.type === 'info',
          'alert-success': toast.type === 'success',
          'alert-warning': toast.type === 'warning',
          'alert-danger': toast.type === 'error',
        },
        style.container,
        style.floatingContainer,
        style[`${toast.type}`],
      )}
      onMouseEnter={() => pauseToast(toast.id)}
      onMouseLeave={() => resumeToast(toast.id)}
    >
      {toast.data?.message}
      <div className={style.actions}>
        {toast.closeable && (
          <button
            className={clsx('close-icon', style.closeButton)}
            onClick={() => closeToast(toast.id)}
          ></button>
        )}
      </div>
    </div>
  );
}

export default ToastComponent;
