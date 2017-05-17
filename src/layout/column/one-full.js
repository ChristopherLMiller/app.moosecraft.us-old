import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import css from './columns.scss';
import global from '../../styles/styles.scss';

const ColumnOneFull = ({ title, classes, children }) => (
  <div className={classNames(css.one_half, classes)}>
    <h3 className={global.center}>{title}</h3>
    <div className="content">
      {children}
    </div>
  </div>
);

ColumnOneFull.propTypes = {
  title: PropTypes.string,
  classes: PropTypes.className,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array, PropTypes.string]).isRequired,
};

ColumnOneFull.defaultProps = {
  title: '',
  classes: null,
};

export default ColumnOneFull;
