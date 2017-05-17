import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

// Pages
import Home from './home';
import Join from './join';
import NotFound from './not-found';

const Routes = () => (
  <main>
    <ReactCSSTransitionGroup
      transitionName="fade"
      transitionEnterTimeout={300}
      transitionLeaveTimeout={300}>
      <Switch>
        <Route location={location} exact path="/" component={Home} />
        <Route location={location} path="/join" component={Join} />
        <Route location={location} component={NotFound} />
      </Switch>
    </ReactCSSTransitionGroup>
  </main>
);

export default Routes;
