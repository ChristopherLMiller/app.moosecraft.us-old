import React from 'react';
import Helmet from 'react-helmet';
import classNames from 'classnames';

import Column from 'src/layout/column';

import styles from 'src/styles/styles.scss';

const RulesPage = () => (
  <div>
    <div className={styles.top_space} />

    <div className={classNames(styles.container, styles.box_width)} >
      <div className={styles.row}>
        <Column width={styles.one_full} title="Server Rules" classes={classNames(styles.background_white, styles.box_shadow)}>
          <p>The following rules must be read and adhered to at all times while playing on our
          server.  Breaking the rules will result in jail time up to and including styles minecraft
          server bans.</p>
        </Column>
      </div>

      <div className={styles.row}>
        <Column width={styles.one_half} title="group 1" classes={classNames(styles.background_white, styles.box_shadow)}>
          <ul>
            <li>Rule #1</li>
            <li>Rule #2</li>
          </ul>
        </Column>
        <Column width={styles.one_half} title="group 1" classes={classNames(styles.background_white, styles.box_shadow)}>
          <ul>
            <li>Rule #1</li>
            <li>Rule #2</li>
          </ul>
        </Column>
      </div>

      <div className={styles.row}>
        <Column width={styles.one_half} title="group 1" classes={classNames(styles.background_white, styles.box_shadow)}>
          <ul>
            <li>Rule #1</li>
            <li>Rule #2</li>
          </ul>
        </Column>
        <Column width={styles.one_half} title="group 1" classes={classNames(styles.background_white, styles.box_shadow)}>
          <ul>
            <li>Rule #1</li>
            <li>Rule #2</li>
          </ul>
        </Column>
      </div>
    </div>

    <Helmet>
      <title>Server Rules</title>
    </Helmet>
  </div>
);

export default RulesPage;
