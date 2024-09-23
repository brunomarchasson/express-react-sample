import styles from './nav.module.scss';
import React from 'react';

async function CompanyLogo() {
  return (
    <div className={styles.companyLogo}>
      <img
        src={
          // data?.company?.logo ??
          'default_logo.svg'
        }
        alt="User Profile Image"
        width={100}
        height={100}
        className={styles.avatar}
      />
    </div>
  );
}

CompanyLogo.propTypes = {};

export default CompanyLogo;
