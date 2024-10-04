import React from 'react';
import { useOutlet } from 'react-router-dom';
import BreadCrumb from '../components/Breadcrumb';

const Home = () => {
  const outlet = useOutlet();
  return (
    <>
      <BreadCrumb />
      {outlet}
    </>
  );
};

export default Home;
