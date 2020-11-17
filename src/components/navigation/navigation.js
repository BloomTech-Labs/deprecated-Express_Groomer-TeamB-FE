import React, { useState, useEffect, useMemo } from 'react';
import { useOktaAuth } from '@okta/okta-react';
import { getUserID } from '../../api/index';
import { Link } from 'react-router-dom';
import { Button } from '../common';
import './nav.scss';
import 'antd/dist/antd.less';

function NavBar() {
  const { authState, authService } = useOktaAuth();
  // eslint-disable-next-line no-unused-vars
  const [userInfo, setUserInfo] = useState(null);
  const [memoAuthService] = useMemo(() => [authService], [authService]);
  const [userRole, setUserRole] = useState('');

  useEffect(() => {
    let isSubscribed = true;

    memoAuthService
      .getUser()
      .then(info => {
        if (isSubscribed) {
          setUserInfo(info);
        }
        return getUserID(
          `${process.env.REACT_APP_API_URI}/profiles/${info.sub}`,
          authState
        );
      })
      .then(res => {
        setUserRole(res.role);
      })
      .catch(err => {
        isSubscribed = false;
        return setUserInfo(null);
      });
    return () => (isSubscribed = false);
  }, [memoAuthService, authState]);

  if (userRole === 'groomer') {
    return (
      <div className="App-Nav">
        <div className="img-container">
          <img
            alt="Express Groomer Logo"
            src="./images/express_groomer.jpg"
            width="200px"
            height="85px"
          />
        </div>

        <nav className="nav-bar">
          <Link className="anchor" to="/">
            Dashboard
          </Link>
          <Link className="anchor" to="/Search">
            Search
          </Link>
          <Button
            handleClick={() => authService.logout()}
            buttonText="Logout"
          />
        </nav>
      </div>
    );
  } else if (userRole === 'customer') {
    return (
      <div className="App-Nav">
        <div className="img-container">
          <img
            alt="Express Groomer Logo"
            src="./images/express_groomer.jpg"
            width="200px"
            height="85px"
          />
        </div>

        <nav className="nav-bar">
          <Link className="anchor" to="/">
            Home
          </Link>
          <Link className="anchor" to="/Search">
            Search
          </Link>
          <Link className="anchor" to="/Pets">
            Pets
          </Link>
          <Button
            handleClick={() => authService.logout()}
            buttonText="Logout"
          />
        </nav>
      </div>
    );
  } else {
    // ============================================================
    return (
      <div className="App-Nav">
        <div className="img-container">
          <img
            alt="Express Groomer Logo"
            src="./images/express_groomer.jpg"
            width="200px"
            height="85px"
          />
        </div>

        <div className="nav-bar"></div>
      </div>
    );
  }
}

export default NavBar;
