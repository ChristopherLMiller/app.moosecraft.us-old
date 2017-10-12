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
    <Heading title="Commands" />

    <div className={classNames(layout.container, layout.box_width)}>
      <div className={layout.row}>
        <Column width={layout.one_full} classes={classNames(colors.background_white, misc.box_shadow)}>
          <p className={misc.side_padding}>This part is also under construction. Eventually you'll be able to see available commands here.</p>
        </Column>
      </div>
    </div>

    <Helmet>
      <title>Commands</title>
    </Helmet>
  </div>
);
