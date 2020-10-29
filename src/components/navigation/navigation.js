import React from 'react';
import { Link } from 'react-router-dom';

import './nav.css';
import 'antd/dist/antd.css';

function NavBar() {
  return (
    <div className="App-Nav">
      <img alt="Express Groomer Logo" src="express_groomer.png" />
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
        <Link className="anchor" to="/Search">
          Search
        </Link>
      </nav>
    </div>
  );
}

export default NavBar;
