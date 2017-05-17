import React from 'react';
import Helmet from 'react-helmet';
import FontAwesome from 'react-fontawesome';

import ColumnOneThird from '../../layout/column/one-third';

import css from './home.scss';
import global from '../../styles/styles.scss';

const Home = () => (
  <div>
    <div className={css.hero}>
      <Helmet>
        <title>Home</title>
      </Helmet>
    </div>

    <div className={global.row}>
      <ColumnOneThird title="66 Unique Players" classes={global.background_white}>
        <div className={global.center}>
          <FontAwesome name="user" size="4x" />
          <p>Players that have joined the server</p>
        </div>
      </ColumnOneThird>

      <ColumnOneThird title="894 Hours Played" classes={global.background_white}>
        <div className={global.center}>
          <FontAwesome name="clock-o" size="4x" />
          <p>Hours of game play logged</p>
        </div>
      </ColumnOneThird>

      <ColumnOneThird title="4495395 Meters" classes={global.background_white}>
        <div className={global.center}>
          <FontAwesome name="line-chart" size="4x" />
          <p>How far players have traveled in game</p>
        </div>
      </ColumnOneThird>
    </div>
  </div>
);

export default Home;
