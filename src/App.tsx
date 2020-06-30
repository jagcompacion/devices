import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import PrivateRoute from 'components/PrivateRoute';

import Register from 'pages/Register';
import Login from 'pages/Login';
import ForgotPassword from 'pages/ForgotPassword';
import ResetPassword from 'pages/ResetPassword';
import Error404 from 'pages/Error404';
import Main from 'pages/Main';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/forgot-password" component={ForgotPassword} />
        <Route path="/reset-password/:token" component={ResetPassword} />
        <Route path="/404" component={Error404} />
        <PrivateRoute isAuthenticated path="/" redirect="/login" component={Main} />
      </Switch>
    </Router>
  );
};

export default App;
