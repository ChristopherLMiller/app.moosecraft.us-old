import React from 'react';
import classNames from 'classnames';
import Helmet from 'react-helmet';

import Column from 'src/components/layout/column';
import Heading from 'src/components/component/heading';

import misc from 'src/styles/misc.scss';
import layout from 'src/styles/layout.scss';
import colors from 'src/styles/colors.scss';

export default () => (
  <div className="content">
    <Heading title="Ranks" />

    <div className={classNames(layout.container, layout.box_width)}>
      <div className={layout.row}>
        <Column width={layout.one_full}classes={classNames(colors.background_white, misc.box_shadow)}>
          <p className={misc.side_padding}>Ranks</p>
        </Column>
      </div>
    </div>

    <Helmet>
      <title>Server Ranks</title>
    </Helmet>
  </div>
);
