import React, { ReactElement } from 'react';
import { Icon } from '../../components/icons';
import { Link } from 'react-router-dom';

function InviteUser(): ReactElement {
  return (
    <Link to="/settings/accounts/invite">
      <button className="btn btn-primary btn-sm btn-ghost">
        <Icon icon="UserRoundPlus"></Icon>
      </button>
    </Link>
  );
}

export default InviteUser;
