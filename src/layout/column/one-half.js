import React from 'react';

import css from './columns.scss';

const ColumnOneHalf = ({ title, children }) => (
  <div className={css.one_half}>
    <h3>{title}</h3>
    <div className="content">
      {children}
    </div>
  </div>
);

ColumnOneHalf.propTypes = {
  title: React.PropTypes.string.isRequired,
  children: React.PropTypes.object.isRequired,
};

export default ColumnOneHalf;
