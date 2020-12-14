import React, { useState, useEffect, useMemo, useContext } from 'react';
import { useOktaAuth } from '@okta/okta-react';
import GroomerProfilePage from './GroomerProfilePage';
// context imports
import { UsersContext } from '../../../state/contexts/UsersContext';
import { GroomersContext } from '../../../state/contexts/GroomersContext';
import { APIContext } from '../../../state/contexts/APIContext';

const GroomerProfileContainer = () => {
  //grabbing user info from okta for test purposes
  //all info could/should be grabbed by state if possible
  const { authService } = useOktaAuth();
  const [memoAuthService] = useMemo(() => [authService], [authService]);

  const [showForm, setShowForm] = useState(false);
  // context state
  const { userInfo, setUserInfo, isRegistered } = useContext(UsersContext);
  const { groomerInfo } = useContext(GroomersContext);
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
  }, [memoAuthService]);

  //getGroomer API call
  // was unable to omit userInfo
  useEffect(() => {
    getLoggedInGroomer(userInfo);
  }, [userInfo]);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div>
      <GroomerProfilePage
        showForm={showForm}
        setShowForm={setShowForm}
        toggleForm={toggleForm}
      />
    </div>
  );
};

export default GroomerProfileContainer;
