import React from 'react';
import Helmet from 'react-helmet';

// Layout
import Footer from './layout/footer';

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

    {/* Main Content Area */}
    <main>Content hahaha</main>

    {/* Footer */}
    <Footer />
  </div>
);

/*
    <Helmet
      title="ReactQL application"
      meta={[{
        name: 'description',
        content: 'ReactQL starter kit app',
      }]} />
    <div className={css.hello}>
      <img src={logo} alt="ReactQL" className={css.logo} />
    </div>
    <hr />
    <GraphQLMessage />
    <hr />
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/page/about">About</Link></li>
      <li><Link to="/page/contact">Contact</Link></li>
    </ul>
    <hr />
    <Route exact path="/" component={Home} />
    <Route path="/page/:name" component={Page} />
    <hr />
    <p>Runtime info:</p>
    <Stats />
    <hr />
    <p>Stylesheet examples:</p>
    <Styles />
  </div>
);
*/
