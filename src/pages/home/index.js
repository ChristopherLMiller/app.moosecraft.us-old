import React from 'react';
import Helmet from 'react-helmet';
import css from './home.scss';

const Home = () => (
  <div className={css.hero}>
    <Helmet>
      <title>Home</title>
    </Helmet>
  </div>
);

export default Home;
