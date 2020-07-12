import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import PrivateRoute from 'components/PrivateRoute';

import Login from 'pages/Login';
import Devices from 'pages/Devices';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <PrivateRoute isAuthenticated path="/" redirect="/login" component={Devices} />
      </Switch>
    </Router>
  );
};

export default App;
