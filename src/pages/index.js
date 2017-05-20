import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

// Pages
import HomePage from './home';
import JoinPage from './join';
import RulesPage from './about-us/rules';

import NotFound from './not-found';

const Routes = () => (
  <main>
    <ReactCSSTransitionGroup
      transitionName="fade"
      transitionEnterTimeout={300}
      transitionLeaveTimeout={300}>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/join" component={JoinPage} />
        <Route path="/rules" component={RulesPage} />
        <Route component={NotFound} />
      </Switch>
    </ReactCSSTransitionGroup>
  </main>
);

export default Routes;
