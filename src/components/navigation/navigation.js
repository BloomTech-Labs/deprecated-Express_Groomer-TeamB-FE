import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import LoginContainer from '../pages/Login/LoginContainer';
import LandingContainer from '../pages/Landing/LandingContainer';
import ExampleList from '../pages/ExampleList/ExampleListContainer';
import ProfileList from '../pages/ProfileList/ProfileListContainer';
import './nav.css';
import 'antd/dist/antd.css';

function NavBar() {
  return (
    <Router>
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

        <Switch>
          <Route exact path="/" component={LandingContainer} />
          <Route exact path="/Login" component={LoginContainer} />
          <Route exact path="/ExampleList" component={ExampleList} />
          <Route exact path="/ProfileList" component={ProfileList} />
        </Switch>
      </div>
    </Router>
  );
}

export default NavBar;
