import { Auth0Provider } from '@auth0/auth0-react';

const AuthContext = ({ children }) => {
  const domain = 'dev-x884dw8sbgercf1c.us.auth0.com';
  const clientId = '83jsTxwl4pN70dQyi8kPQj1gN6VP2dTp';

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
      useRefreshTokens={true}
      cacheLocation='localstorage'
    >
      {children}
    </Auth0Provider>
  );
};

export default AuthContext;
