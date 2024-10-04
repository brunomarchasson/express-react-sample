import React, { useEffect, useRef, useState } from 'react';
import style from './style.module.scss';
import clsx from 'clsx';
import { Icon } from '../icons';

interface Props
  extends React.DetailedHTMLProps<
    React.DialogHTMLAttributes<HTMLDialogElement>,
    HTMLDialogElement
  > {
  isOpen: boolean;
  title?: string;
  onClose: () => void;
}

function Modal({ isOpen = false, onClose, title, children, ...props }: Props) {
  const ref = useRef<HTMLDialogElement | null>(null);
  const [internalOpen, setInternatOpen] = useState(isOpen);

  console.log('isOpen', isOpen);
  console.log('internalOpen', internalOpen);
  useEffect(() => {
    if (isOpen) {
      ref.current?.showModal();
      setInternatOpen(true);
    } else if (internalOpen) {
      const onDialogClosed = () => {
        ref.current?.close();
        ref.current?.removeEventListener('animationend', onDialogClosed);
        setInternatOpen(false);
      };
      ref.current?.addEventListener('animationend', onDialogClosed);
    }
  }, [isOpen]);
  // useEffect(() => {
  //     console.log(isOpen)
  //   if (isOpen) {
  //     ref.current?.showModal();
  //   } else {
  //     // handleClose()
  //     const onDialogClosed = () => {
  //         console.log('Animation ended')
  //         if (ref.current) {
  //             ref.current.removeEventListener("animationend", onDialogClosed);
  //             setClosing(false)
  //             ref.current.close();
  //         }
  //       };
  //     setClosing(true)

  //     ref.current?.addEventListener("animationend", onDialogClosed);
  //     return () => ref.current?.removeEventListener("animationend", onDialogClosed);
  //   }
  // }, [isOpen]);

  // const handleClose = () => {
  //     console.log('handleClose')
  //     if (ref.current) {
  //         ref.current.addEventListener("animationend", onDialogClosed);
  //         setClosing(true)
  //     }
  //   };
  //   const onDialogClosed = () => {
  //     console.log('Animation ended')
  //     if (ref.current) {
  //         ref.current.removeEventListener("animationend", onDialogClosed);
  //         setClosing(false)
  //         ref.current.close();
  //     }
  //   };
  //   const handleKeyDown = (e: React.KeyboardEvent<HTMLDialogElement>) => {
  //     if (e.keyCode === 27) {
  //       e.preventDefault();
  //       onClose();
  //     }
  //   };
  return (
    <dialog
      ref={ref}
      //   onKeyDown={handleKeyDown}
      className={clsx(style.dialog, {
        [style.closing]: !isOpen && internalOpen,
      })}
      onCancel={onClose}
      {...props}
    >
      <div className={style.title}>
        <span></span>
        <h1>{title}</h1>
        <button className="btn btn-icon btn-primary btn-link" onClick={onClose}>
          <Icon icon="SquareX" size="2rem"></Icon>
        </button>
      </div>
      <div className={style.content}>{internalOpen && children}</div>
    </dialog>
  );
}

export default Modal;
