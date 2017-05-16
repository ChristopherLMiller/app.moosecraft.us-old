import React from 'react';
import PropTypes from 'prop-types';

import css from './columns.scss';

const ColumnOnethird = ({ title, children }) => (
  <div className={css.one_third}>
    <h3>{title}</h3>
    <div className="content">
      {children}
    </div>
  </div>
);

ColumnOnethird.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array, PropTypes.string]).isRequired,
};

export default ColumnOnethird;
