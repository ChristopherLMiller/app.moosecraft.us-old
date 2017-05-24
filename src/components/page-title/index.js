import React from 'react';
import PropTypes from 'prop-types';

import styles from 'src/styles/styles.scss';

const PageTitle = ({ title }) => (
  <h1 className={styles.center}>{title}</h1>
);

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PageTitle;
