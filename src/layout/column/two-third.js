import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import css from './columns.scss';
import global from '../../styles/styles.scss';

const ColumnTwoThird = ({ title, classes, children }) => (
  <div className={classNames(css.two_third, classes)}>
    <h3 className={global.center}>{title}</h3>
    <div className="content">
      {children}
    </div>
  </div>
);

ColumnTwoThird.propTypes = {
  title: PropTypes.string,
  classes: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array, PropTypes.string]).isRequired,
};

ColumnTwoThird.defaultProps = {
  title: '',
  classes: null,
};

export default ColumnTwoThird;
