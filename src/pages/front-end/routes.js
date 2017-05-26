import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Pages
import HomePage from './home';
import JoinPage from './join';
import RulesPage from './about-us/rules';

import NotFound from './not-found';

const Routes = () => (
  <main>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/join" component={JoinPage} />
      <Route path="/rules" component={RulesPage} />
      <Route component={NotFound} />
    </Switch>
  </main>
);

export default Routes;
