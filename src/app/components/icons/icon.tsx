import { HTMLAttributes, useMemo } from 'react';

import { icons } from './icons';
import React from 'react';

export type IconName = keyof typeof icons;

interface Props extends HTMLAttributes<HTMLDivElement> {
  icon: IconName;
  className?: string;
  // These props make styling component easier than creating new classes
  rotate?: number;
  size?: number;
}

/**
 *
 * @param icon string key icon name
 * @param className string classes for styling
 * @param rotate optional number rotation of the icon
 * @returns Icon react component
 */
export const Icon = ({ icon, size, className, rotate, ...rest }: Props) => {
  const SvgIcon = useMemo(() => icons[icon], [icon]);

  if (!SvgIcon) return null;

  return (
    <div
      className={className}
      aria-label={icon}
      role="img"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        transform: rotate ? `rotate(${rotate}deg)` : undefined,
        width: size,
        // height: size,
      }}
      {...rest}
    >
      {/* <Suspense fallback={null}> */}
      <SvgIcon />
      {/* </Suspense> */}
    </div>
  );
};
