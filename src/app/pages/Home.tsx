import React from 'react';
import { useOutlet } from 'react-router-dom';

const Home = () => {
  const outlet = useOutlet();
  return <>{outlet}</>;
};

export default Home;
