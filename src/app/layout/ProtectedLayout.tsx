import React from 'react';
import { Navigate, useOutlet } from 'react-router-dom';
import { useAuth } from '../services/auth/store';

export const ProtectedLayout = () => {
  console.log('ProtectedLayout');
  const user = useAuth((state) => state.user);
  const outlet = useOutlet();

  if (user === null) {
    return <Navigate to="/login" />;
  }

  return <>{outlet}</>;
};
