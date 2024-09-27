import React from 'react';
import style from './stateIcons.module.scss';

interface IconProps {
  size?: number | string;
}

export function SuccessIcon({ size = 48 }: IconProps) {
  return (
    <svg
      id={style['successAnimation']}
      className={style['animated']}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 70 70"
    >
      <circle
        id={style['successAnimationCircle']}
        cx="35"
        cy="35"
        r="24"
        stroke="var(--success-color)"
        strokeWidth="2"
        strokeLinecap="round"
        fill="transparent"
      />
      <polyline
        id={style['successAnimationCheck']}
        stroke="var(--success-color)"
        strokeWidth="2"
        points="23 34 34 43 47 27"
        fill="transparent"
      />
    </svg>
  );
}

export function ErrorIcon({ size = 48 }: IconProps) {
  return (
    <svg
      id={style['failureAnimation']}
      className={style['animated']}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 70 70"
    >
      <circle
        id={style['failureAnimationCircle']}
        cx="35"
        cy="35"
        r="24"
        stroke="var(--error-color)"
        strokeWidth="2"
        strokeLinecap="round"
        fill="transparent"
      />
      <polyline
        className={style['failureAnimationCheckLine']}
        stroke="var(--error-color)"
        strokeWidth="2"
        points="25,25 45,45"
        fill="transparent"
      />
      <polyline
        className={style['failureAnimationCheckLine']}
        stroke="var(--error-color)"
        strokeWidth="2"
        points="45,25 25,45"
        fill="transparent"
      />
    </svg>
  );
}

export function LoadingIcon({ size = 48 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 70 70"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient x1="8.042%" y1="0%" x2="65.682%" y2="23.865%" id="a">
          <stop stopColor="currentColor" stopOpacity="0" offset="0%" />
          <stop stopColor="currentColor" stopOpacity=".631" offset="63.146%" />
          <stop stopColor="currentColor" offset="100%" />
        </linearGradient>
      </defs>
      <path
        d="M 59 35 A 24 24 0 0 0 35 11"
        id="Oval-2"
        stroke="url(#a)"
        strokeWidth="2"
        fill="none"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 35 35"
          to="360 35 35"
          dur="0.9s"
          repeatCount="indefinite"
        />
      </path>
      <circle fill="currentColor" cx="59" cy="35" r="1">
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 35 35"
          to="360 35 35"
          dur="0.9s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  );
}
