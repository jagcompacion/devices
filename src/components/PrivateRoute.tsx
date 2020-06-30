import React from 'react';
import { Route, Redirect } from 'react-router-dom';

type Props = {
  component: React.FC;
  isAuthenticated: boolean;
  redirect: string;
  path: string;
};

const PrivateRoute: React.FC<Props> = ({ component, isAuthenticated, redirect, path }: Props) => {
  const routeComponent = (props: any) =>
    isAuthenticated ? React.createElement(component, props) : <Redirect to={{ pathname: redirect }} />;
  return <Route path={path} render={routeComponent} />;
};

export default PrivateRoute;
