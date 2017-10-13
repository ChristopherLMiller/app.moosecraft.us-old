import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import layout from 'src/styles/layout.scss';
import misc from 'src/styles/misc.scss';
import styles from './style.scss';

const heading = ({ title, subtext }) => (
  <div className={styles.heading}>
    <div className={classNames(layout.container, layout.full_width, misc.no_padding_bottom)}>
      <h1 className={styles.title}>{title}</h1>
      <h3 className={styles.subtext}>{subtext}</h3>
    </div>
  </div>
);

heading.propTypes = {
  title: PropTypes.string.isRequired,
  subtext: PropTypes.string,
};

heading.defaultProps = {
  subtext: null,
};

export default heading;

