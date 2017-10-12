import React from 'react';
import Helmet from 'react-helmet';
import classNames from 'classnames';

import Card from 'src/components/component/card';
import PageTitle from 'src/components/component/pageTitle';
import HeroHome from 'src/components/component/heroHome';
import Interrupter from 'src/components/component/interrupter';

import layout from 'src/styles/layout.scss';
import colors from 'src/styles/colors.scss';

export default () => (
  <div className="content">
    <HeroHome />

    <Interrupter text="Here are a couple of our stats" />
    <div className={classNames(layout.container, layout.box_width)}>
      <div className={layout.row}>
        <Card title="66 Unique Players" width={layout.one_third} icon="user" text="Player that have joined the server" />
        <Card title="894 Hours Played" width={layout.one_third} icon="clock-o" text="Hours of gameplay logged" />
        <Card title="4495395 Meters" width={layout.one_third} icon="line-chart" text="How far players have traveled in game" />
      </div>
    </div>

    <Helmet>
      <title>Home</title>
      <body className="home" />
    </Helmet>
  </div>
);
