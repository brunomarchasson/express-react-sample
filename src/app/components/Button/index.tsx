import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import StateButton, { ButtonState } from './StateButton';

function useClickAway(cb: (e: MouseEvent | TouchEvent) => void) {
  const ref = useRef<HTMLButtonElement>(null);
  const refCb = useRef(cb);

  useLayoutEffect(() => {
    refCb.current = cb;
  });

  useEffect(() => {
    const handler = (event: MouseEvent | TouchEvent) => {
      const element = ref.current;
      if (element && !element.contains(event.target as Node)) {
        refCb.current(event);
      }
    };

    document.addEventListener('mousedown', handler);
    document.addEventListener('touchstart', handler);

    return () => {
      document.removeEventListener('mousedown', handler);
      document.removeEventListener('touchstart', handler);
    };
  }, []);

  return ref;
}

interface FeedbackButtonProps
  extends React.ComponentPropsWithoutRef<typeof StateButton> {
  onClick?: () => Promise<void> | void;
  needConfirm?: boolean;
}

export function FeedbackButton({
  needConfirm = false,
  onClick,
  ...props
}: FeedbackButtonProps) {
  const [state, setState] = useState<ButtonState>(null);

  const elRef = useClickAway(() => {
    if (state !== 'wip') setState(null);
  });

  const handleClick = () => {
    if (!needConfirm || state === 'confirm') {
      if (onClick) {
        setState('wip');
        Promise.resolve(onClick())
          .then(() => setState('success'))
          .catch(() => setState('error'))
          .finally(() =>
            setTimeout(() => {
              // if (isMounted()) setState(null);
            }, 3000),
          );
      } else {
        setState(null);
      }
      return;
    }
    if (needConfirm) setState('confirm');
  };

  console.log(state);
  return (
    <StateButton
      {...props}
      ref={elRef}
      onClick={handleClick}
      state={state}
    ></StateButton>
  );
}

export default FeedbackButton;
