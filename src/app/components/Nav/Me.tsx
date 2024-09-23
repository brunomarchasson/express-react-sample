import styles from './nav.module.scss';
import React from 'react';
// import LogoutButton from "../LogoutButton";
import { NavLink } from 'react-router-dom';

function Me() {
  return (
    <NavLink to="/me" className={styles.me}>
      {/* <LogoutButton /> */}
    </NavLink>
  );
}

Me.propTypes = {};

export default Me;
