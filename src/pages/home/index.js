import React from 'react';
import Helmet from 'react-helmet';

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
      <ColumnOneThird title="66 Unique Players">
        <div className={global.center}>
          <img src="" alt="clock" />
          <p>Players that have joined the server.</p>
        </div>
      </ColumnOneThird>

      <ColumnOneThird title="894 hours played">
        <div className={global.center}>
          <img src="" alt="clock" />
          <p>Hours of game play logged</p>
        </div>
      </ColumnOneThird>

      <ColumnOneThird title="XXX stat here">
        <div className={global.center}>
          <img src="" alt="clock" />
          <p>description of said stat</p>
        </div>
      </ColumnOneThird>
    </div>
  </div>
);

export default Home;
