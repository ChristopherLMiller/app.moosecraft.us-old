import React from 'react';
import PropTypes from 'prop-types';

import css from './columns.scss';
import global from '../../styles/styles.scss';

const ColumnOneHalf = ({ title, children }) => (
  <div className={css.one_half}>
    <h3 className={global.center}>{title}</h3>
    <div className="content">
      {children}
    </div>
  </div>
);

ColumnOneHalf.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array, PropTypes.string]).isRequired,
};

export default ColumnOneHalf;
