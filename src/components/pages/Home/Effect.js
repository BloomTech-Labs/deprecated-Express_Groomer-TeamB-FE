import { useState, useMemo } from 'react';
import { useOktaAuth } from '@okta/okta-react';
import { getUserID } from '../../../api/index';

function EffectFunction(authMemo, stateAuth) {
  const { authState, authService } = useOktaAuth();
  const [userInfo, setUserInfo] = useState(null);
  // eslint-disable-next-line
  const [memoAuthService] = useMemo(() => [authService], []);
  const [userRole, setUserRole] = useState('');

  let isSubscribed = true;

  memoAuthService
    .getUser()
    .then(info => {
      // if user is authenticated we can use the authService to snag some user info.
      // isSubscribed is a boolean toggle that we're using to clean up our useEffect.
      if (isSubscribed) {
        setUserInfo(info);
      }

      return getUserID(`http://localhost:8000/profiles/${info.sub}`, authState);
    })
    .then(res => {
      setUserRole(res.role);
    })
    .catch(err => {
      isSubscribed = false;
      return setUserInfo(null);
    });
  return () => (isSubscribed = false);
}

export default EffectFunction;
