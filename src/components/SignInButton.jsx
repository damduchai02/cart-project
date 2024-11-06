import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@mui/material';

function SignInButton({ text = 'Sign In' }) {
  const { loginWithRedirect } = useAuth0();

  function handleLogin() {
    loginWithRedirect();
  }

  return (
    <Button size='small' variant='outlined' onClick={handleLogin}>
      {text}
    </Button>
  );
}

export default SignInButton;
