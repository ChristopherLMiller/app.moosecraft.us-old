import React from 'react';
import Helmet from 'react-helmet';
import classNames from 'classnames';

import Column from 'src/layout/column';
import BackgroundImage from 'src/components/background-image';

import styles from 'src/styles/styles.scss';

const JoinPage = () => (
  <div>
    <div className={styles.top_space} />

    <div className={classNames(styles.container, styles.box_width)} >
      <div className={styles.row}>
        <Column title="Join Our Server" width={styles.two_third} classes={classNames(styles.background_white, styles.box_shadow)}>
          <p>We are happy to have you on board, however we have an application process to join.
          Don't worry, everybody gets accepted, its just more to verify you have indeed read
          the rules, and help eliminate potential griefers a bit.</p>
        </Column>

        <Column width={styles.one_third} classes={classNames(styles.no_padding, styles.box_shadow)}>
          <BackgroundImage url="https://static.moosecraft.us/img/slider/larry.png" />
        </Column>
      </div>
    </div>

    <Helmet>
      <title>Join Our Server</title>
    </Helmet>
  </div>
);

export default JoinPage;
