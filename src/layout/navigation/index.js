import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from 'src/styles/styles.scss';

import { STATIC } from 'config/project';

import SiteLogo from './logo';


const NavigationBar = () => (
  <navigation id="nav">
    <div className={styles.logoWrapper}>
      <SiteLogo linkTo="/"><img className={styles.logo} alt="logo" src={`${STATIC.img}/logo.png`} /></SiteLogo>
    </div>
    <ul className={styles.topLevel}>
      <li><NavLink to="/join"><span className={styles.label}>Join</span></NavLink></li>
      <li><NavLink to="#"><span className={styles.label}>About Us</span></NavLink>
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
      <li><NavLink to="#"><span className={styles.label}>(C)</span></NavLink></li>
      <li><NavLink to="#"><span className={styles.label}>(P)</span></NavLink></li>
    </ul>
  </navigation>
);

export default NavigationBar;
