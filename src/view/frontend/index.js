import React from 'react';
import Helmet from 'react-helmet';
import ScrollMemory from 'react-router-scroll-memory';
import { connect } from 'react-redux';

import Header from 'src/components/layout/header';
import Routes from 'src/view/frontend/routes';
import Footer from 'src/components/layout/footer';
import Copyright from 'src/components/component/copyright';
import firebase from 'src/firebase/firebase';
import { STATIC } from 'config/project';

import { addMenuItem } from 'src/store/actions';

import 'src/styles/styles.global.css';
import 'src/styles/global.scss';

@connect()
class FrontEnd extends React.PureComponent {
  componentWillMount() {
    const itemsRef = firebase.database().ref('menu');
    itemsRef.on('value', snapshot => {
      this.props.dispatch(addMenuItem(snapshot.val()));
    });
  }

  render() {
    return (
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
        <ScrollMemory />
        <Routes />

        {/* Footer */}
        <Footer />
        <Copyright />
      </div>
    );
  }
}

export default FrontEnd;
