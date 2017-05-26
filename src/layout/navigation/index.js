import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import styles from 'src/styles/styles.scss';

import { STATIC } from 'config/project';
import { fetchMenu } from 'src/redux/actions';
import SiteLogo from './logo';

const mapStateToProps = state => ({
  menu: state.app.menu.items,
});

class NavigationBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      menu: [],
    };
  }

  componentDidMount() {
    this.props.dispatch(fetchMenu());
  }

  render() {
    return (
      <navigation id="nav">
        <div className={styles.logoWrapper}>
          <SiteLogo linkTo="/"><img className={styles.logo} alt="logo" src={`${STATIC.img}/logo.png`} /></SiteLogo>
        </div>
        <ul className={styles.topLevel}>
          <li><NavLink to="/join"><span className={styles.label}>Join</span></NavLink></li>
          <li><span className={styles.label}>About Us</span>
            <ul className={styles.subNavigation}>
              <li><NavLink to="/rules">Rules</NavLink></li>
              <li><NavLink to="/ranks">Ranks</NavLink></li>
              <li><NavLink to="/commands">Commands</NavLink></li>
              <li><NavLink to="/history">History</NavLink></li>
              <li><NavLink to="/who-we-are">Who We Are</NavLink></li>
              <li><NavLink to="/goals">Goals</NavLink></li>
              <li><NavLink to="/blog">Blog</NavLink></li>
            </ul>
          </li>
          <li><span className={styles.label}>Stats</span>
            <ul className={styles.subNavigation}>
              <li><NavLink to="/stats/server">Server</NavLink></li>
              <li><NavLink to="/stats/players">Player</NavLink></li>
              <li><a href="https://dynmap.moosecraft.us">Live Map</a></li>
            </ul>
          </li>
          <li><NavLink to="/gallery"><span className={styles.label}>Gallery</span></NavLink></li>
          <li><NavLink to="/forums"><span className={styles.label}>Forums</span></NavLink></li>
          <li><NavLink to="/contact"><span className={styles.label}>Contact</span></NavLink></li>
          <li><span className={styles.label}>(C)</span></li>
          <li><span className={styles.label}>(P)</span></li>
        </ul>
      </navigation>
    );
  }
}

export default connect(mapStateToProps)(NavigationBar);
