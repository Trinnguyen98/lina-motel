import React from 'react';
import { Route } from 'react-router-dom';

import { Home } from '../pages/home'

const AllRoutes = [
  {
    component: Home,
    exact: true,
    key: 'home',
    path: '/',
  },
]

export const Routes = [
  ...AllRoutes.map(({ component, exact, key, path }) => (
    <Route component={component} exact={exact} key={key} path={path} />
  ))
]