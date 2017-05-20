import React from 'react';
import Helmet from 'react-helmet';
import classNames from 'classnames';

import ColumnTwoThird from '../../layout/column/two-third';
import ColumnOneThird from '../../layout/column/one-third';
import BackgroundImage from '../../components/background-image';

import global from '../../styles/styles.scss';

const JoinPage = () => (
  <div>
    <div className={global.top_padding} />
    <div className={global.row}>
      <ColumnTwoThird title="Join Our Server" classes={classNames(global.background_white, global.box_shadow)}>
        <p>We are happy to have you on board, however we have an application process to join.
        Don't worry, everybody gets accepted, its just more to verify you have indeed read
        the rules, and help eliminate potential griefers a bit.</p>
      </ColumnTwoThird>
      <ColumnOneThird classes={classNames(global.no_padding, global.box_shadow)}>
        <BackgroundImage url="https://static.moosecraft.us/img/slider/larry.png" />
      </ColumnOneThird>
    </div>

    <Helmet>
      <title>Join Our Server</title>
    </Helmet>
  </div>
);

export default JoinPage;
