import React from 'react';
import { Link } from 'react-router-dom';

import './nav.css';
import 'antd/dist/antd.css';

function NavBar() {
  return (
    <div className="App-Nav">
      <nav className="nav-bar">
        <Link className="anchor" to="/">
          Home
        </Link>
        <Link className="anchor" to="/Login">
          Login
        </Link>
        <Link className="anchor" to="/ExampleList">
          Examples
        </Link>
        <Link className="anchor" to="/ProfileList">
          ProfileList
        </Link>
      </nav>
    </div>
  );
}

export default NavBar;