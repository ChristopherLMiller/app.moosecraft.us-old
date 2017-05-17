import React from 'react';
import PropTypes from 'prop-types';

import css from './columns.scss';
import global from '../../styles/styles.scss';

const ColumnOneThird = ({ title, children }) => (
  <div className={css.one_third}>
    <h3 className={global.center}>{title}</h3>
    <div className="content">
      {children}
    </div>
  </div>
);

ColumnOneThird.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array, PropTypes.string]).isRequired,
};

ColumnOneThird.defaultProps = {
  title: '',
};

export default ColumnOneThird;
