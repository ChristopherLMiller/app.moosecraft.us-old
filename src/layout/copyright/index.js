import React from 'react';

import css from '../../styles/styles.scss';

const Copyright = () => (
  <div className={css.copyright}>
    <p>&copy; Copyright {new Date().getFullYear()} Moosecraft</p>
  </div>
);

export default Copyright;
