import { useAuth0 } from '@auth0/auth0-react';

import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
  const { isLoading, isAuthenticated, loginWithRedirect } = useAuth0();

  return isAuthenticated + isLoading ? (
    children
  ) : (
    <Navigate to={loginWithRedirect()} />
  );
}

export default ProtectedRoute;
