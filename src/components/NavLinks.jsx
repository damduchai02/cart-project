import { useAuth0 } from '@auth0/auth0-react';
import { Tab, Tabs } from '@mui/material';
import { NavLink, matchPath, useLocation } from 'react-router-dom';

const links = [
  { id: 1, url: '/', text: 'home' },
  { id: 2, url: 'about', text: 'about' },
  { id: 3, url: 'products', text: 'products' },
  { id: 4, url: 'cart', text: 'cart' },
];

const patterns = ['/', 'about', 'products', 'cart'];

function useRouteMatch(patterns) {
  const { pathname } = useLocation();

  for (let i = 0; i < patterns.length; i += 1) {
    const pattern = patterns[i];
    const possibleMatch = matchPath(pattern, pathname);
    if (possibleMatch !== null) {
      return possibleMatch;
    }
  }

  return null;
}

function NavLinks() {
  const { isLoading, isAuthenticated } = useAuth0();

  const routeMatch = useRouteMatch(patterns);
  const currentTab = routeMatch?.pattern?.path;

  return (
    <Tabs value={currentTab}>
      {links.map((link) => {
        const { id, url, text } = link;

        if (url === 'cart' && !(isLoading + isAuthenticated)) return null;

        return (
          <Tab
            key={id}
            LinkComponent={NavLink}
            to={url}
            value={url}
            label={text}
            sx={{
              textTransform: 'capitalize',
              ':hover': {
                textDecoration: 'underline',
                textUnderlineOffset: '18px',
              },
            }}
          />
        );
      })}
    </Tabs>
  );
}

export default NavLinks;
