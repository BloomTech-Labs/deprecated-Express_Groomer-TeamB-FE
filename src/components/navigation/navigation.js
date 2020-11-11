import React, { useState, useEffect, useMemo } from 'react';
import { useOktaAuth } from '@okta/okta-react';
import { getUserID } from '../../api/index';
import { Link } from 'react-router-dom';
// import AuthContext from "../../state/contexts/index";
import './nav.scss';
import 'antd/dist/antd.less';

function NavBar() {
  const { authState, authService } = useOktaAuth();
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
          console.log('Thi is in navBar useEffect for info.role', info.sub);
        }
        return getUserID(
          `http://localhost:8000/profiles/${info.sub}`,
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
            Home
          </Link>
          <Link className="anchor" to="/">
            GroomerLand
          </Link>
          <Link className="anchor" to="/ProfileList">
            ProfileList
          </Link>
          <Link className="anchor" to="/Search">
            Search
          </Link>
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
          <Link className="anchor" to="/">
            CustomerLand
          </Link>
          <Link className="anchor" to="/ProfileList">
            ProfileList
          </Link>
          <Link className="anchor" to="/Search">
            Search
          </Link>
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

        <nav className="nav-bar">
          <Link className="anchor" to="/">
            Home
          </Link>
          <Link className="anchor" to="/">
            DefaultLand
          </Link>
          <Link className="anchor" to="/ProfileList">
            ProfileList
          </Link>
          <Link className="anchor" to="/Search">
            Search
          </Link>
        </nav>
      </div>
    );
  }
}

export default NavBar;
