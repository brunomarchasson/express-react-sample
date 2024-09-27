import React from 'react';
import { useAuth } from '../../services/auth/store';
import Avatar from '../Avatar';
import Logout from '../Logout';
import style from './nav.module.scss';
import { Link } from 'react-router-dom';
function Me() {
  const user = useAuth((s) => s.user);

  return (
    <Link to="/settings/me" className={style['me']}>
      <Avatar className={style['me--avatar']} data={user?.avatar}></Avatar>
      <div className={style['me--infos']}>
        <span className={style['me--name']}>{user?.name}</span>
        <Logout></Logout>
      </div>
    </Link>
  );
}

Me.propTypes = {};

export default Me;
