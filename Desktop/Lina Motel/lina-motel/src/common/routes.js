import React from 'react';
import { Route } from 'react-router-dom';
import { Examination } from '../pages/examination';

import {Home} from '../pages/home'
import {AppRoutes} from '../components/app-routes'

const AllRoutes = [
    {
      component: Home,
      exact: true,
      key: 'home',
      path: '/',
    },
    {
      component: Examination,
      exact: true,
      key: 'examination',
      path: '/examination',
    },
]

export const Routes = [
  ...AllRoutes.map(({ component, exact, key, path }) => (
    <Route component={component} exact={exact} key={key} path={path} />
  ))
]