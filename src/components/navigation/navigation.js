import React, { useState, useEffect, useMemo } from 'react';
import { useOktaAuth } from '@okta/okta-react';
import { getUserID } from '../../api/index';
import { Link } from 'react-router-dom';
import './nav.scss';
import 'antd/dist/antd.less';
import styled from 'styled-components';

const Button = styled.button`
  background-color: white;
  color: #1ea7fd;
  border: none;
  border-radius: 10px;
  padding: 10px;
  padding-top: 7.5px;
  padding-bottom: 7.5px;
  width: 170px;

  :hover {
    background-color: #1ea7fd;
    color: white;
  }
`;

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
          <div class="express-logo">
            <span class="groomer-one">Express</span>{' '}
            <span class="groomer-two">Groomer</span>
          </div>
        </div>

        <nav className="nav-bar">
          <Link className="anchor" to="/">
            Home
          </Link>
          <Link className="anchor" to="/groomer-dashboard">
            Dashboard
          </Link>
          <Link className="anchor" to="/Search">
            Search
          </Link>
          <Button type="primary" onClick={() => authService.logout()}>
            Logout
          </Button>
        </nav>
      </div>
    );
  } else if (userRole === 'customer') {
    return (
      <div className="App-Nav">
        <div className="img-container">
          <div class="express-logo">
            <span class="groomer-one">Express</span>{' '}
            <span class="groomer-two">Groomer</span>
          </div>
        </div>

        <nav className="nav-bar">
          <Link className="anchor" to="/">
            Home
          </Link>
          <Link className="anchor" to="/Search">
            Search
          </Link>
          <Button type="primary" onClick={() => authService.logout()}>
            Logout
          </Button>
        </nav>
      </div>
    );
  } else {
    // ============================================================
    return (
      <div className="App-Nav">
        <div className="img-container">
          <div class="express-logo">
            <span class="groomer-one">Express</span>{' '}
            <span class="groomer-two">Groomer</span>
          </div>
        </div>

        <div className="nav-bar">{/* no nav */}</div>
      </div>
    );
  }
}

export default NavBar;
