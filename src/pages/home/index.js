import React from 'react';
import Helmet from 'react-helmet';
import FontAwesome from 'react-fontawesome';
import classNames from 'classnames';

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
      <ColumnOneThird title="66 Unique Players" classes={classNames(global.background_white, global.box_shadow)}>
        <div className={global.center}>
          <FontAwesome name="user" style={{ fontSize: '6em', color: '#CCCCCC' }} />
          <p>Players that have joined the server</p>
        </div>
      </ColumnOneThird>

      <ColumnOneThird title="894 Hours Played" classes={classNames(global.background_white, global.box_shadow)}>
        <div className={global.center}>
          <FontAwesome name="clock-o" style={{ fontSize: '6em', color: '#CCCCCC' }} />
          <p>Hours of game play logged</p>
        </div>
      </ColumnOneThird>

      <ColumnOneThird title="4495395 Meters" classes={classNames(global.background_white, global.box_shadow)}>
        <div className={global.center}>
          <FontAwesome name="line-chart" style={{ fontSize: '6em', color: '#CCCCCC' }} />
          <p>How far players have traveled in game</p>
        </div>
      </ColumnOneThird>
    </div>
  </div>
);

export default Home;
