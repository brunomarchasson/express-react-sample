import React from 'react';
import { useAuth } from '../services/auth/store';

const Home = () => {
  const logout = useAuth((state) => state.logout);

  return (
    <div>
      Hello
      <button onClick={logout}>logout</button>
    </div>
  );
};

export default Home;
