import React from 'react';
import { Link } from 'react-router-dom';

const SiteLogo = ({ linkTo, children }) => (
  <Link to={linkTo}>{children}</Link>
);

SiteLogo.propTypes = {
  linkTo: React.PropTypes.string.isRequired,
  children: React.PropTypes.object.isRequired,
};

export default SiteLogo;
