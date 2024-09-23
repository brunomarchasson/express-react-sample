import React from 'react';
import { useAuth } from '../services/auth/store';
import { useOutlet } from 'react-router-dom';

const Home = () => {
  const outlet = useOutlet();
  const logout = useAuth((state) => state.logout);

  return (
    <div>
      Hello
      <button onClick={logout}>logout</button>
      {outlet}
      aa
    </div>
  );
};

export default Home;
