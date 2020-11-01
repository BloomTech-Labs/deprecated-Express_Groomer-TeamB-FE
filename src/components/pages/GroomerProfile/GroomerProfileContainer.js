import React, { useState, useEffect, useMemo } from 'react';
import { useOktaAuth } from '@okta/okta-react';

import GroomerProfilePage from './GroomerProfilePage';

function GroomerProfileContainer() {
  const { authState, authService } = useOktaAuth();
  const [userInfo, setUserInfo] = useState();
  // eslint-disable-next-line
  const [memoAuthService] = useMemo(() => [authService], []);

  useEffect(() => {
    let isSubscribed = true;

    memoAuthService
      .getUser()
      .then(info => {
        // if user is authenticated we can use the authService to snag some user info.
        // isSubscribed is a boolean toggle that we're using to clean up our useEffect.
        if (isSubscribed) {
          setUserInfo(info);
        }
      })
      .catch(err => {
        isSubscribed = false;
        return setUserInfo();
      });
    return () => (isSubscribed = false);
  }, [memoAuthService]);

  return (
    <>
      {authState.isAuthenticated && userInfo && (
        <GroomerProfilePage userInfo={userInfo} authService={authService} />
      )}
    </>
  );
}

export default GroomerProfileContainer;
