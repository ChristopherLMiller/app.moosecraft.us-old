import React from 'react';
import Helmet from 'react-helmet';
import classNames from 'classnames';

import Card from 'src/components/component/card';
import Heading from 'src/components/component/heading';
import HeroHome from 'src/components/component/heroHome';
import Interrupter from 'src/components/component/interrupter';

import layout from 'src/styles/layout.scss';
import misc from 'src/styles/misc.scss';

export default () => (
  <div className="content">
    <HeroHome />

    <div className={misc.padding_150}>
      <Heading title="Welcome to Moosecraft!" subtext="Connect now: mc.moosecraft.us" />
    </div>

    <Interrupter text="Here are a couple of our stats" />
    <div className={classNames(layout.container, layout.box_width)}>
      <div className={layout.row}>
        <Card title="Unique Players" width={layout.one_third} value="66" text="Players Joined" />
        <Card title="Hours Played" width={layout.one_third} value="894" text="Hours of gameplay logged" />
        <Card title="Distance Traveled" width={layout.one_third} value="45495" text="Walking Kilometers" />
      </div>
    </div>

    <Helmet>
      <title>Home</title>
      <body className="home" />
    </Helmet>
  </div>
);
