import React from 'react';
import Helmet from 'react-helmet';
import { Route } from 'react-router-dom';

// Layout
import Header from './layout/header';
import Footer from './layout/footer';
import Copyright from './layout/copyright';

// Pages
import Home from './pages/home';

// Styling
import './styles/styles.global.css';
import css from './styles/styles.scss';

// Export a simple component that allows clicking on list items to change
// the route, along with a <Route> 'listener' that will conditionally display
// the <Page> component based on the route name
export default () => (
  <div className={css.app}>
    <Helmet
      title="Moosecraft.us"
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
      ]} />

    {/* Header */}
    <Header />

    {/* Main Content Area */}
    <main>
      <Route exact path="/" component={Home} />
    </main>

    {/* Footer */}
    <Footer />
    <Copyright />
  </div>
);
