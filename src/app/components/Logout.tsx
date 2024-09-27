import React, { ReactElement } from 'react';
import { useAuth } from '../services/auth/store';
import { Icon } from './icons';

function Logout(): ReactElement {
  const logout = useAuth((state) => state.logout);
  return (
    <button className="btn btn-sm  btn-primary btn-link" onClick={logout}>
      <Icon icon="LogOut" size="1rem" />
    </button>
  );
}

export default Logout;
