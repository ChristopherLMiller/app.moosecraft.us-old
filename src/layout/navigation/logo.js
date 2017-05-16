import React from 'react';
import { Link } from 'react-router-dom';

import css from './navigation.scss';

const SiteLogo = ({ linkTo, children }) => (
  <Link to={linkTo} className={css.navLogo}>{children}</Link>
);

SiteLogo.propTypes = {
  linkTo: React.PropTypes.string.isRequired,
  children: React.PropTypes.object.isRequired,
};

export default SiteLogo;
