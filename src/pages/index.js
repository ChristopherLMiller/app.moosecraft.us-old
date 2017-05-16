import React from 'react';
import { Route } from 'react-router-dom';

// Pages
import Home from './home';
import Join from './join';

const Routes = () => (
  <main>
    <Route exact path="/" component={Home} />
    <Route exact path="/join" compoonent={Join} />
  </main>
);

export default Routes;
