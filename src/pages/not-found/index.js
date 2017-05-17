import React from 'react';
import Helmet from 'react-helmet';
import classNames from 'classnames';

import ColumnOneHalf from '../../layout/column/one-half';
import ColumnOneFourth from '../../layout/column/one-fourth';
import global from '../../styles/styles.scss';

const NotFound = () => (
  <div>
    <div className={global.top_padding} />
    <div className={global.row}>
      <ColumnOneFourth classes={global.hide_small}>
        <img src="https://static.moosecraft.us/v2/img/creeper.png" alt="creeper" style={{ height: '200px', float: 'right' }} />
      </ColumnOneFourth>
      <ColumnOneHalf title="404 Not Found" classes={classNames(global.background_white, global.box_shadow)}>
        <p>The page you are looking for was not found.  Sorry about that.</p>
        <p>If you feel this is in error please report this to <a href="mailto:admin@moosecraft.us">admin@moosecraft.us</a></p>
        <p>Additionally for reference the page requested was: {location.pathname}</p>
      </ColumnOneHalf>
      <ColumnOneFourth classes={global.hide_small}>
        <img src="https://static.moosecraft.us/v2/img/creeper.png" alt="creeper" style={{ height: '200px', transform: 'rotateY(180deg)' }} />
      </ColumnOneFourth>
    </div>

    <Helmet>
      <title>404 Not Found</title>
    </Helmet>
  </div>
);

export default NotFound;
