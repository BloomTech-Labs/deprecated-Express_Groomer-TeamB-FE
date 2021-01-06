import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  useHistory,
  Switch,
} from 'react-router-dom';

import { Security, LoginCallback, SecureRoute } from '@okta/okta-react';
import 'antd/dist/antd.less';
import { NotFoundPage } from './components/pages/NotFound';
import { HomePage } from './components/pages/Home';
import { LoginPage } from './components/pages/Login';
import { config } from './utils/oktaConfig';
import { LoadingComponent } from './components/common';
import { GroomerProfilePage } from './components/pages/GroomerProfile';
import { GroomerDashboard } from './components/pages/GroomerProfile/GroomerDashboard';
import NavBar from './components/navigation/navigation';
import Searching from './components/pages/Search/RenderSearchPage';
import { CustomerProfilePage } from './components/pages/CustomerProfile';
import GroomerSearchResults from './components/pages/SearchResults/GroomerSearchResults';
// context import
import { RootProvider } from './state/contexts/RootContext';

ReactDOM.render(
  <Router>
    <RootProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </RootProvider>
  </Router>,
  document.getElementById('root')
);

function App() {
  // The reason to declare App this way is so that we can use any helper functions we'd need for business logic, in our case auth.
  // React Router has a nifty useHistory hook we can use at this level to ensure we have security around our routes.
  const history = useHistory();

  const authHandler = () => {
    // We pass this to our <Security /> component that wraps our routes.
    // It'll automatically check if userToken is available and push back to login if not :)
    history.push('/login');
  };

  return (
    <Security {...config} onAuthRequired={authHandler}>
      <NavBar />
      {/* <RenderPetAdditionForm /> */}
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/implicit/callback" component={LoginCallback} />
        <Route path="/search" component={Searching} />
        <Route path="/groomers/:id" component={GroomerProfilePage} />
        <Route
          path="/groomer-search-results/:id"
          component={GroomerSearchResults}
        />
        {/* any of the routes you need secured should be registered as SecureRoutes */}
        <SecureRoute
          path="/"
          exact
          component={() => <HomePage LoadingComponent={LoadingComponent} />}
        />
        <SecureRoute path="/groomer-profile" component={GroomerProfilePage} />
        <SecureRoute path="/customer-profile" component={CustomerProfilePage} />
        <SecureRoute path="/groomer-dashboard" component={GroomerDashboard} />
        <Route component={NotFoundPage} />
      </Switch>
    </Security>
  );
}
