import React from 'react';

import css from './footer.scss';


const Column = ({ title }) => (
  <div className={css.column}>
    <h3>{title}</h3>
    <div>
      <p>Test</p>
    </div>
  </div>
);

Column.propTypes = {
  title: React.PropTypes.string.isRequired,
};

export default Column;
