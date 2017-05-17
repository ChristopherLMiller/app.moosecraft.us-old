import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Pages
import Home from './home';
import Join from './join';
import NotFound from './not-found';

const Routes = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/join" component={Join} />
      <Route component={NotFound} />
    </Switch>
  </main>
);

export default Routes;
