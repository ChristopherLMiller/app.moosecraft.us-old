import React from 'react';
import Helmet from 'react-helmet';

import Header from 'src/components/layout/header';
import Routes from 'src/view/frontend/routes';
import Footer from 'src/components/layout/footer';
import Copyright from 'src/components/component/copyright';
import { STATIC } from 'config/project';

import 'src/styles/styles.global.css';
import 'src/styles/global.scss';

export default () => (
  <div>
    <Helmet
      titleTemplate="Moosecraft.us - %s"
      defaultTitle="Home"
      meta={[
        {
          name: 'description',
          content: 'Moosecraft.us',
        },
        {
          name: 'keywords',
          content: 'Minecraft, Moosecraft, Bukkit, Spigot, Vanilla, Survival, McMMO, Dynmap',
        },
        {
          name: 'theme-color',
          content: '#4CAF50',
        },
        {
          name: 'msapplication-config',
          content: `${STATIC.root}/browserconfig.xml`,
        },
      ]} />


    {/* Header */}
    <Header />

    {/* Main Content Area */}
    <Routes />

    {/* Footer */}
    <Footer />
    <Copyright />
  </div>
);
