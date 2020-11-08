import React from 'react';
import { HashRouter, Switch } from 'react-router-dom';
import {Routes} from './common/routes'
import './css/antd.css';

function App() {

  return (
    <HashRouter>
    <Switch>{Routes}</Switch>
    </HashRouter>
  );
}

export default App;
