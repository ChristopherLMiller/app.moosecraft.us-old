import React from 'react';
import Helmet from 'react-helmet';

import ColumnTwoThird from '../../layout/column/two-third';
import ColumnOneThird from '../../layout/column/one-third';
import global from '../../styles/styles.scss';

const Join = () => (
  <div>
    <div className={global.top_padding} />
    <div className={global.row}>
      <ColumnTwoThird title="Join Our Server" classes={global.background_white}>
        <p>We are happy to have you on board, however we have an application process to join.
        Don't worry, everybody gets accepted, its just more to verify you have indeed read
        the rules, and help eliminate potential griefers a bit.</p>
      </ColumnTwoThird>
      <ColumnOneThird>
        <img src="something.png" alt="something" />
      </ColumnOneThird>
    </div>

    <Helmet>
      <title>Join Our Server</title>
    </Helmet>
  </div>
);

export default Join;
