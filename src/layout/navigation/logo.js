import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import css from './navigation.scss';

const SiteLogo = ({ linkTo, children }) => (
  <Link to={linkTo} className={css.navLogo}>{children}</Link>
);

SiteLogo.propTypes = {
  linkTo: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
};

export default SiteLogo;
