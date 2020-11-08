import React from 'react';
import { Route, useHistory } from 'react-router-dom';

export const AppRoutes = ({
  component: Component,
  ...rest
}) => {
  return <Route {...rest} render={props => <Component {...props} />} />;
};
