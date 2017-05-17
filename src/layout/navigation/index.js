import React from 'react';
import { NavLink } from 'react-router-dom';

import css from './navigation.scss';

import { STATIC } from '../../../config/project';

import SiteLogo from './logo';

const NavigationBar = () => (
  <navigation>
    <div className={css.logoWrapper}>
      <SiteLogo linkTo="/"><img className={css.logo} alt="logo" src={`${STATIC.img}/logo.png`} /></SiteLogo>
    </div>
    <ul className={css.topLevel}>
      <li><NavLink to="/join"><span className={css.label}>Join</span></NavLink></li>
      <li><NavLink to="#"><span className={css.label}>About Us</span></NavLink>
        <ul className={css.subNavigation}>
          <li><NavLink to="/rules">Rules</NavLink></li>
          <li><NavLink to="/ranks">Ranks</NavLink></li>
          <li><NavLink to="/commands">Commands</NavLink></li>
          <li><NavLink to="/history">History</NavLink></li>
          <li><NavLink to="/who-we-are">Who We Are</NavLink></li>
          <li><NavLink to="/goals">Goals</NavLink></li>
          <li><NavLink to="/blog">Blog</NavLink></li>
        </ul>
      </li>
      <li><span className={css.label}>Stats</span>
        <ul className={css.subNavigation}>
          <li><NavLink to="/stats/server">Server</NavLink></li>
          <li><NavLink to="/stats/players">Player</NavLink></li>
          <li><a href="https://dynmap.moosecraft.us">Live Map</a></li>
        </ul>
      </li>
      <li><NavLink to="/gallery"><span className={css.label}>Gallery</span></NavLink></li>
      <li><NavLink to="/forums"><span className={css.label}>Forums</span></NavLink></li>
      <li><NavLink to="/contact"><span className={css.label}>Contact</span></NavLink></li>
      <li><NavLink to="#"><span className={css.label}>(C)</span></NavLink></li>
      <li><NavLink to="#"><span className={css.label}>(P)</span></NavLink></li>
    </ul>
  </navigation>
);

export default NavigationBar;
