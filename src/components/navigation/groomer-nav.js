import React from 'react';
import './groomer-nav.css';
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom';

function GroomerHoverNav() {
  return (
    <div className="container">
      <div className="pop-out">
        <div className="arrow-pointer">
          <p> &gt; </p>
        </div>
        <div className="anchors">
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
        </div>
      </div>
    </div>
  );
}

export default GroomerHoverNav;
