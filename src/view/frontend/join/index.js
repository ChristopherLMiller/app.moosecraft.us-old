import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';

import Column from 'src/components/layout/column';
import Heading from 'src/components/component/heading';
import BackgroundImage from 'src/components/component/backgroundImage';
import { STATIC } from 'config/project';

import misc from 'src/styles/misc.scss';
import layout from 'src/styles/layout.scss';
import colors from 'src/styles/colors.scss';

export default () => (
  <div className="content">
    <Heading title="Join Our Server" />

    <div className={classNames(layout.container, layout.box_width)}>
      <div className={layout.row}>
        <Column title="Why Join?" width={layout.two_third} classes={classNames(colors.background_white, misc.box_shadow)}>
          <p className={misc.side_padding}>Becoming a member of this community is pretty awesome if I say so myself.  We are proud to remain a small and very friendly group of people who all enjoy Minecraft.  We aren't a very strict place, but there are some basic rules to know and understand and you'll have a great time yourself.</p>
        </Column>

        <Column width={layout.one_third} classes={classNames(misc.no_padding, misc.box_shadow)}>
          <BackgroundImage url={`${STATIC.img}/slider/larry.png`} />
        </Column>
      </div>

      <div className={layout.row}>
        <Column width={layout.one_third} classes={classNames(misc.no_padding, misc.box_shadow)}>
          <BackgroundImage url={`${STATIC.img}/tree.png`} />
        </Column>

        <Column title="Benefits of Joining" width={layout.two_third} classes={classNames(colors.background_white, misc.box_shadow)}>
          <p className={misc.side_padding}>What are some of the benefits of joining?</p>
          <ul className={misc.side_padding}>
            <li>Great community</li>
            <li>Relaxed building - build what you want where you want</li>
            <li>Awesome plugins - Some custom to the server!</li>
            <li>24/7 uptime - We strive to make sure the server is always oneline</li>
          </ul>
        </Column>
      </div>

      <div className={layout.row}>
        <Column title="Sign Me Up!" width={layout.one_full} classes={classNames(colors.background_white, misc.box_shadow)}>
          <p className={misc.side_padding}>One last thing, be sure to read and follow the instructions below to start building today!</p>
          <ol className={misc.side_padding}>
            <li>Read the rules located <Link to="/rules">Here</Link> and be willing to accept them.</li>
            <li>Log onto the server.  This is critical so our permissions sysstem will pickup your application.</li>
            <li>Fill in the form below and submit.</li>
            <li>Enjoy!</li>
          </ol>
        </Column>
      </div>
    </div>

    <Helmet>
      <title>Join Our Server</title>
    </Helmet>
  </div>
);
