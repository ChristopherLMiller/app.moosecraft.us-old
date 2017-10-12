import React from 'react';
import Helmet from 'react-helmet';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { STATIC } from 'config/project';

import Column from 'src/components/layout/column';

import layout from 'src/styles/layout.scss';
import misc from 'src/styles/misc.scss';
import colors from 'src/styles/colors.scss';

const NotFound = ({ location }) => (
  <div className="content">
    <div className={misc.top_space} />

    <div className={classNames(layout.container, layout.box_width)}>
      <div className={layout.row}>
        <Column width={layout.one_fourth} classes={misc.hide_small}>
          <img src={`${STATIC.img}/creeper.png`} alt="creeper" style={{ height: '200px', float: 'right' }} />
        </Column>

        <Column width={layout.one_half} title="404 Not Found" classes={classNames(colors.background_white, misc.box_shadow)}>
          <p className={classNames(misc.side_padding, misc.center)}>The page your are looking for can't seem to be found.  Maybe those pesky creepers got into the computer again!</p>
          <p className={classNames(misc.side_padding, misc.center)}>If you feel this is in error please report this to <a href="mailto:admin@moosecraft.us">admin@moosecraft.us</a></p>
          <p className={classNames(misc.side_padding, misc.center)}>Additionally for reference the page requested was:</p>
          <p className={classNames(misc.side_padding, misc.center)}>{location.pathname}</p>
        </Column>

        <Column width={layout.one_fourth} classes={misc.hide_small}>
          <img src={`${STATIC.img}/creeper.png`} alt="creeper" style={{ height: '200px', transform: 'rotateY(180deg)' }} />
        </Column>
      </div>
    </div>

    <Helmet>
      <title>404 Not Found</title>
    </Helmet>
  </div>
);

NotFound.propTypes = {
  location: PropTypes.object.isRequired,
};

export default NotFound;
