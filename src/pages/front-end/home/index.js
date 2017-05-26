import React from 'react';
import Helmet from 'react-helmet';
import FontAwesome from 'react-fontawesome';
import classNames from 'classnames';

import Column from 'src/layout/column';
import PageTitle from 'src/components/page-title';


import styles from 'src/styles/styles.scss';
import css from './home.scss';

const HomePage = () => (
  <div>
    <div className={css.hero} />

    <div className={classNames(styles.container, styles.full_width, styles.background_grey)}>
      <div className={styles.row}>
        <Column width={styles.one_full}>
          <PageTitle title="Welcome to Moosecraft" />
        </Column>
      </div>
    </div>

    <div className={classNames(styles.container, styles.box_width)}>
      <div className={styles.row}>
        <Column title="66 Unique Players" width={styles.one_third} classes={classNames(styles.background_white, styles.box_shadow)}>
          <div className={styles.center}>
            <FontAwesome name="user" className={styles.text_grey} style={{ fontSize: '6em' }} />
            <p>Players that have joined the server</p>
          </div>
        </Column>

        <Column title="894 Hours Played" width={styles.one_third} classes={classNames(styles.background_white, styles.box_shadow)}>
          <div className={styles.center}>
            <FontAwesome name="clock-o" className={styles.text_grey} style={{ fontSize: '6em' }} />
            <p>Hours of game play logged</p>
          </div>
        </Column>

        <Column title="4495395 Meters" width={styles.one_third} classes={classNames(styles.background_white, styles.box_shadow)}>
          <div className={styles.center}>
            <FontAwesome name="line-chart" className={styles.text_grey} style={{ fontSize: '6em' }} />
            <p>How far players have traveled in game</p>
          </div>
        </Column>
      </div>
    </div>

    <Helmet>
      <title>Home</title>
      <body className={styles.home} />
    </Helmet>
  </div>
);

export default HomePage;
