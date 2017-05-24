import React from 'react';

import styles from 'src/styles/styles.scss';

const Copyright = () => (
  <div className={styles.copyright}>
    <p>&copy; Copyright {new Date().getFullYear()} Moosecraft</p>
  </div>
);

export default Copyright;
