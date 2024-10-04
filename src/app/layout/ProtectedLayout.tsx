import React from 'react';
import { Navigate, useOutlet } from 'react-router-dom';
import { useAuth } from '../services/auth/store';
import Nav from '../components/Nav/Nav';

export const ProtectedLayout = () => {
  const user = useAuth((state) => state.user);
  const outlet = useOutlet();

  if (user === null) {
    return <Navigate to="/login" />;
  }

  return <Nav>{outlet}</Nav>;
};
