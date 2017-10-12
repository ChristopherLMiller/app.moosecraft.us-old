import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import layout from 'src/styles/layout.scss';
import misc from 'src/styles/misc.scss';
import styles from './style.scss';

const heading = ({ title }) => (
  <div>
    <div className={misc.top_space} />
    <div className={classNames(layout.container, layout.full_width, misc.no_padding_bottom, styles.heading)}>
      <div className={layout.row}>
        <h1 className={styles.heading}>{title}</h1>
      </div>
    </div>
  </div>
);

heading.propTypes = {
  title: PropTypes.string.isRequired,
};

export default heading;

