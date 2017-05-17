import React from 'react';
import Helmet from 'react-helmet';

import ColumnOneFull from '../../layout/column/one-full';
import global from '../../styles/styles.scss';

const Join = () => (
  <div>
    <div className={global.top_padding} />
    <div className={global.row}>
      <ColumnOneFull className={global.background_white}>
        <p>Join Page</p>
      </ColumnOneFull>
    </div>

    <Helmet>
      <title>Join Our Server</title>
    </Helmet>
  </div>
);

export default Join;
