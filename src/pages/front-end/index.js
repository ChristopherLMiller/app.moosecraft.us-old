import React from 'react';
import Helmet from 'react-helmet';

// Layout
import Header from 'src/layout/header';
import Footer from 'src/layout/footer';
import Copyright from 'src/layout/copyright';

// Styling
import 'src/styles/styles.global.css';
import styles from 'src/styles/styles.scss';

// import routes
import Routes from './routes';

const FrontEnd = () => (
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

export default FrontEnd;
