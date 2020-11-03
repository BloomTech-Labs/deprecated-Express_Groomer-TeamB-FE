import React from 'react';
import { Link } from 'react-router-dom';

import './nav.scss';
import 'antd/dist/antd.less';

function NavBar() {
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
