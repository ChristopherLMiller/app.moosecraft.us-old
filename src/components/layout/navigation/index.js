import React from 'react';
import { NavLink } from 'react-router-dom';

import SiteLogo from 'src/components/component/siteLogo';
import { STATIC } from 'config/project';

import styles from './style.scss';

class NavigationBar extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      menu: [],
    };
  }

  render() {
    return (
      <nav id="nav">
        <div className={styles.logoWrapper}>
          <SiteLogo linkTo="/"><img className={styles.logo} alt="logo" src={`${STATIC.img}/logo.png`} /></SiteLogo>
        </div>
        <ul className={styles.topLevel}>
          <li><NavLink to="/join"><span className={styles.label}>Join</span></NavLink></li>
          <li><span className={styles.label}>About Us</span>
            <ul className={styles.subNavigation}>
              <li><NavLink to="/about-us/rules">Rules</NavLink></li>
              <li><NavLink to="/about-us/ranks">Ranks</NavLink></li>
              <li><NavLink to="/about-us/commands">Commands</NavLink></li>
              <li><NavLink to="/about-us/history">History</NavLink></li>
              <li><NavLink to="/about-us/who-we-are">Who We Are</NavLink></li>
              <li><NavLink to="/about-us/goals">Goals</NavLink></li>
              <li><NavLink to="/about-us/blog">Blog</NavLink></li>
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
      </nav>
    );
  }
}

export default NavigationBar;
