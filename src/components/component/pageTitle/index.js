import React from 'react';
import PropTypes from 'prop-types';

import misc from 'src/styles/misc.scss';

const PageTitle = ({ title }) => (
  <h1 className={misc.center}>{title}</h1>
);

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PageTitle;
