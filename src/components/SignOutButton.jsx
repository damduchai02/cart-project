import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@mui/material';
import { toast } from 'react-toastify';

function SignOutButton() {
  const { isAuthenticated, logout } = useAuth0();

  function handleLogout() {
    logout({ logoutParams: { returnTo: window.location.origin } });
    toast.success('Logged out successfully');
  }

  return (
    isAuthenticated && (
      <Button size='small' variant='outlined' onClick={handleLogout}>
        Logout
      </Button>
    )
  );
}

export default SignOutButton;
