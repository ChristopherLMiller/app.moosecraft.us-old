import React from 'react';
import Helmet from 'react-helmet';

import ColumnOneFull from '../../layout/column/one-full';
import global from '../../styles/styles.scss';

const NotFound = () => (
  <div>
    <div className={global.top_padding} />
    <div className={global.row}>
      <ColumnOneFull title="404 Not Found">
        <p>The page you are looking for was not found.  Sorry about that.</p>
        <p>If you feel this is in error please report this to <a href="mailto:admin@moosecraft.us">admin@moosecraft.us</a></p>
        <p>Additionally for reference the page requested was: {location.pathname}</p>
      </ColumnOneFull>
    </div>

    <Helmet>
      <title>404 Not Found</title>
    </Helmet>
  </div>
);

export default NotFound;
