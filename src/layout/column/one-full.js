import React from 'react';
import PropTypes from 'prop-types';

import css from './columns.scss';

const ColumnOneFull = ({ title, children }) => (
  <div className={css.one_half}>
    <h3>{title}</h3>
    <div className="content">
      {children}
    </div>
  </div>
);

ColumnOneFull.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array, PropTypes.string]).isRequired,
};

ColumnOneFull.defaultProps = {
  title: '',
};

export default ColumnOneFull;
