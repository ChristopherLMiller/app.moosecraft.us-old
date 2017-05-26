import React from 'react';
import { Switch, Route } from 'react-router-dom';

import FrontEnd from 'src/pages/front-end';
import BackEnd from 'src/pages/back-end';

export default () => (
  <Switch>
    <Route path="/admin" component={BackEnd} />
    <Route path="/" component={FrontEnd} />
  </Switch>
);
