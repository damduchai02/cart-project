import { AppBar, Toolbar, Stack } from '@mui/material';

import Logo from './Logo';
import NavLinks from './NavLinks';
import CartButton from './CartButton';
import SignInButton from './SignInButton';
import SignOutButton from './SignOutButton';
import { useAuth0 } from '@auth0/auth0-react';

function Navbar() {
  const { isLoading, isAuthenticated } = useAuth0();

  return (
    <AppBar
      component='nav'
      sx={{
        bgcolor: '#f2f6ff',
        position: 'static',
        boxShadow: 0,
        paddingX: 23,
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Logo />
        <NavLinks />
        <Stack direction='row' spacing={4} sx={{ alignItems: 'center' }}>
          {!isLoading && (
            <>
              {!isAuthenticated && <SignInButton />}
              {isAuthenticated && (
                <>
                  <CartButton />
                  <SignOutButton />
                </>
              )}
            </>
          )}
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
