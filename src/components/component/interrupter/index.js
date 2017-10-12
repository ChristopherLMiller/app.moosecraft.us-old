import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import layout from 'src/styles/layout.scss';
import misc from 'src/styles/misc.scss';
import styles from './style.scss';

const interrupter = ({ text }) => (
  <div className={classNames(layout.container, layout.full_width, misc.no_padding_bottom, styles.interrupter)}>
    <div className={layout.row}>
      <h1 className={styles.interrupter}>{text}</h1>
    </div>
  </div>
);

interrupter.propTypes = {
  text: PropTypes.string.isRequired,
};

export default interrupter;

