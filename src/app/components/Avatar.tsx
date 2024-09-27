import React, { ReactElement } from 'react';
import { Icon } from './icons';
import clsx from 'clsx';

interface Props {
  data?: string | null;
  className?: string;
}

function Avatar({ data, className }: Props): ReactElement {
  return (
    <span className={clsx('avatar', className)}>
      {data ? (
        <img src={data} alt="" />
      ) : (
        <Icon icon="UserRoundPen" size={64} />
      )}
    </span>
  );
}

export default Avatar;
