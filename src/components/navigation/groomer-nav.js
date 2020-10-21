import React from 'react';
import './groomer-nav.css';
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import LoginContainer from '../pages/Login/LoginContainer';
import LandingContainer from '../pages/Landing/LandingContainer';
import ExampleList from '../pages/ExampleList/ExampleListContainer';
import ProfileList from '../pages/ProfileList/ProfileListContainer';

function GroomerHoverNav() {
  return (
    <div className="container">
      <div className="pop-out">
        <div className="arrow-pointer">
          <p> &gt; </p>
        </div>
        <div className="anchors">
          {/* <a href="#">Home</a>
          <a href="#">Login</a>
          <a href="#">Exmaples</a>
          <a href="#">profileList</a> */}
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
