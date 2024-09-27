'use client';
import React from 'react';
import styles from './nav.module.scss';
import NavItem from './NavItem';
import { clsx } from 'clsx';
import BurgerMenu from './BurgerMenu';
import { useToggle } from '../../hooks/useToggle';
import { useIsMounted } from '../../hooks/useIsMounted';
import Me from './Me';

export function Nav({ children }: React.PropsWithChildren) {
  const [open, toggleOpen] = useToggle(false);
  const isMounted = useIsMounted();
  return (
    <div className={styles.wrapper}>
      <div className={styles.sidebar}>
        <div className={styles.brand}>
          {/* <CompanyLogo /> */}
          <Me />
        </div>
        <div className={styles.menu}>
          <ul>
            <NavItem path="/">Home</NavItem>
            <NavItem path="/settings">settings</NavItem>
            <NavItem path="/settings/me">me</NavItem>
            <NavItem path="/settings/accounts">accounts</NavItem>

            <NavItem path="/ui">ui tests</NavItem>
          </ul>
        </div>
      </div>
      <div
        className={clsx(styles.content, {
          [styles.shrink]: open,
          [styles.noAnimation]: !isMounted(),
        })}
      >
        <button
          className={clsx('btn btn--gosht', styles.openMenu)}
          onClick={toggleOpen}
        >
          <BurgerMenu size={32} open={open} />
          {/* <FontAwesomeIcon icon={faBars}0 />  */}
        </button>
        {children}
      </div>
    </div>
  );
}

export default Nav;
