import React, { useEffect, useMemo, useContext } from 'react';
import { useOktaAuth } from '@okta/okta-react';
import GroomerProfilePage from './GroomerProfilePage';
// context imports
import { UsersContext } from '../../../state/contexts/UsersContext';
import { APIContext } from '../../../state/contexts/APIContext';

const GroomerProfileContainer = () => {
  //grabbing user info from okta for test purposes
  //all info could/should be grabbed by state if possible
  const { authService } = useOktaAuth();
  const [memoAuthService] = useMemo(() => [authService], [authService]);

  // context state
  const { userInfo, setUserInfo } = useContext(UsersContext);
  const { getLoggedInGroomer } = useContext(APIContext);

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
        return setUserInfo(null);
      });
    return () => (isSubscribed = false);
  }, [memoAuthService, setUserInfo]);

  //getGroomer API call
  // was unable to omit userInfo
  useEffect(() => {
    getLoggedInGroomer();
  }, [userInfo, getLoggedInGroomer]);

  return (
    <div>
      <GroomerProfilePage />
    </div>
  );
};

export default GroomerProfileContainer;
