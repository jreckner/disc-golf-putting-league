import { Navigate, Outlet, useLocation } from 'react-router';

import { AuthProviderProps, useAuth } from '../context/AuthContext';

export function ProtectedRoute() {
  const { token, isLoading } = useAuth() as AuthProviderProps;
  const location = useLocation();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!token) {
    return <Navigate replace state={{ redirectTo: location }} to='/authenticate' />;
  }

  return <Outlet />;
}
