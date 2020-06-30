import React from 'react';
import { Container } from 'react-bootstrap';
import { Route, Switch } from 'react-router-dom';
import TopNavbar from 'components/TopNavbar';

import Orders from 'pages/Orders';
import NewOrder from 'pages/NewOrder';
import OrderDetail from 'pages/OrderDetail';
import Profile from 'pages/Profile';
import Wallet from 'pages/Wallet';

const Main: React.FC = () => {
  return (
    <>
      <TopNavbar />
      <Container className="py-5">
        <Switch>
          <Route path="/orders/new" component={NewOrder} />
          <Route path="/orders/:orderId" component={OrderDetail} />
          <Route path="/wallet" component={Wallet} />
          <Route path="/profile" component={Profile} />
          <Route path="/" component={Orders} />
        </Switch>
      </Container>
    </>
  );
};

export default Main;
