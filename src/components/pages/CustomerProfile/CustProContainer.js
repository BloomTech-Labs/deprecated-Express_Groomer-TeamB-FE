import React, { useEffect, useMemo, useContext } from 'react';
import RenderCustPro from './RenderCustPro';
import { useOktaAuth } from '@okta/okta-react';
// context imports
import { UsersContext } from '../../../state/contexts/UsersContext';
import { CustomersContext } from '../../../state/contexts/CustomersContext';
import { APIContext } from '../../../state/contexts/APIContext';
import { FormContext } from '../../../state/contexts/FormContext';

const CustProContainer = () => {
  //grabbing user info from okta for test purposes
  //all info could/should be grabbed by state if possible
  const { authService, authState } = useOktaAuth();
  const [memoAuthService] = useMemo(() => [authService], [authService]);

  // context state
  const { userInfo, setUserInfo } = useContext(UsersContext);
  const { custInfo, updated, setUpdated } = useContext(CustomersContext);
  const { showForm, setShowForm } = useContext(FormContext);
  const { getCustomerByID } = useContext(APIContext);

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

  //API call to get customer info
  useEffect(() => {
    getCustomerByID(authState);
  }, [userInfo, authState, updated]);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <RenderCustPro
      custInfo={custInfo}
      showForm={showForm}
      toggleForm={toggleForm}
      updated={updated}
      setUpdated={setUpdated}
    />
  );
};

export default CustProContainer;
