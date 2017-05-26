import React from 'react';
import Helmet from 'react-helmet';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import Column from 'src/layout/column';
import styles from 'src/styles/styles.scss';

const NotFound = ({ location }) => (
  <div>
    <div className={styles.top_space} />

    <div className={classNames(styles.container, styles.box_width)}>
      <div className={styles.row}>
        <Column width={styles.one_fourth} classes={styles.hide_small}>
          <img src="https://static.moosecraft.us/v2/img/creeper.png" alt="creeper" style={{ height: '200px', float: 'right' }} />
        </Column>

        <Column width={styles.one_half} title="404 Not Found" classes={classNames(styles.background_white, styles.box_shadow)}>
          <p>The page you are looking for was not found.  Sorry about that.</p>
          <p>If you feel this is in error please report this to <a href="mailto:admin@moosecraft.us">admin@moosecraft.us</a></p>
          <p>Additionally for reference the page requested was: {location.pathname}</p>
        </Column>

        <Column width={styles.one_fourth} classes={styles.hide_small}>
          <img src="https://static.moosecraft.us/v2/img/creeper.png" alt="creeper" style={{ height: '200px', transform: 'rotateY(180deg)' }} />
        </Column>
      </div>
    </div>

    <Helmet>
      <title>404 Not Found</title>
    </Helmet>
  </div>
);

NotFound.propTypes = {
  location: PropTypes.string.isRequired,
};

export default NotFound;
