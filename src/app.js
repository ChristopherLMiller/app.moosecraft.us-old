import React from 'react';
import Helmet from 'react-helmet';

// Layout
import Header from './layout/header';
import Footer from './layout/footer';
import Copyright from './layout/copyright';

// Styling
import './styles/styles.global.css';
import styles from './styles/styles.scss';

import Routes from './pages/';

// Export a simple component that allows clicking on list items to change
// the route, along with a <Route> 'listener' that will conditionally display
// the <Page> component based on the route name
export default () => (
  <div className={styles.app}>
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
          content: 'https://static.moosecraft.us/v2/browserconfig.xml',
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
