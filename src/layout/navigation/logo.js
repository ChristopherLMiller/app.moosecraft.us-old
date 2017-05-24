import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from 'src/styles/styles.scss';

const SiteLogo = ({ linkTo, children }) => (
  <Link to={linkTo} className={styles.navLogo}>{children}</Link>
);

SiteLogo.propTypes = {
  linkTo: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
};

export default SiteLogo;
