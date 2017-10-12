import React from 'react';
import { Route, Switch } from 'react-router-dom';

import FrontEnd from 'src/view/frontend';
import BackEnd from 'src/view/backend';

/* App */
export default () => (
  <Switch>
    <Route path="/admin" component={BackEnd} />
    <Route path="/" component={FrontEnd} />
  </Switch>
);
