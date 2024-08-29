import { Navigate, useOutlet } from 'react-router-dom';
import { useAuth } from '../services/auth/store';

export const PublicLayout = () => {
  const user = useAuth((state) => state.user);

  const outlet = useOutlet();

  if (user) {
    return <Navigate to="/" replace />;
  }

  return outlet;
};
