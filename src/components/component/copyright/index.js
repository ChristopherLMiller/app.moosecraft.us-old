import React from 'react';

import style from './style.scss';

export default () => (
  <div className={style.copyright}>
    <p>&copy; Copyright { new Date().getFullYear() } Moosecraft</p>
  </div>
);
