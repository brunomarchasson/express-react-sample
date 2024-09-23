'use client';
import React from 'react';
import styles from './nav.module.scss';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';

export type NavItemsProps = {
  path: string;
  children: React.ReactNode;
};
export default function NavItem({ path, children }: NavItemsProps) {
  return (
    <li className={clsx(styles.navItem)}>
      <NavLink to={path}>{children}</NavLink>
    </li>
  );
}
