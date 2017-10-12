import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Pages
import Home from 'src/view/frontend/home';
import Join from 'src/view/frontend/join';
import Rules from 'src/view/frontend/about-us/rules';
import Ranks from 'src/view/frontend/about-us/ranks';
import Commands from 'src/view/frontend/about-us/commands';
import History from 'src/view/frontend/about-us/history';
import WhoWeAre from 'src/view/frontend/about-us/who-we-are';
import Goals from 'src/view/frontend/about-us/goals';
import Blog from 'src/view/frontend/about-us/blog';
import NotFound from 'src/view/frontend/notFound';

export default () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/join" component={Join} />
      <Route path="/about-us/rules" component={Rules} />
      <Route path="/about-us/ranks" component={Ranks} />
      <Route path="/about-us/commands" component={Commands} />
      <Route path="/about-us/history" component={History} />
      <Route path="/about-us/who-we-are" component={WhoWeAre} />
      <Route path="/about-us/goals" component={Goals} />
      <Route path="/about-us/blog" component={Blog} />
      <Route component={NotFound} />
    </Switch>
  </main>
);
