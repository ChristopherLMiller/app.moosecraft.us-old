import React from 'react';
import Helmet from 'react-helmet';
import classNames from 'classnames';

import ColumnOneFull from '../../../layout/column/one-full';
import ColumnOneHalf from '../../../layout/column/one-half';

import global from '../../../styles/styles.scss';

const RulesPage = () => (
  <div>
    <div className={global.top_padding} />
    <div className={global.row}>
      <ColumnOneFull title="Server Rules" classes={classNames(global.background_white, global.box_shadow)}>
        <p>The following rules must be read and adhered to at all times while playing on our server.
        Breaking the rules will result in jail time up to and including global minecraft server
        bans.</p>
      </ColumnOneFull>
    </div>

    <div className={global.row}>
      <ColumnOneHalf title="group 1" classes={classNames(global.background_white, global.box_shadow)}>
        <ul>
          <li>Rule #1</li>
          <li>Rule #2</li>
        </ul>
      </ColumnOneHalf>
      <ColumnOneHalf title="group 1" classes={classNames(global.background_white, global.box_shadow)}>
        <ul>
          <li>Rule #1</li>
          <li>Rule #2</li>
        </ul>
      </ColumnOneHalf>
    </div>

    <div className={global.row}>
      <ColumnOneHalf title="group 1" classes={classNames(global.background_white, global.box_shadow)}>
        <ul>
          <li>Rule #1</li>
          <li>Rule #2</li>
        </ul>
      </ColumnOneHalf>
      <ColumnOneHalf title="group 1" classes={classNames(global.background_white, global.box_shadow)}>
        <ul>
          <li>Rule #1</li>
          <li>Rule #2</li>
        </ul>
      </ColumnOneHalf>
    </div>

    <Helmet>
      <title>Server Rules</title>
    </Helmet>
  </div>
);

export default RulesPage;
