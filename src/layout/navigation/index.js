import React from 'react';

import css from './navigation.scss';

import { STATIC } from '../../../config/project';

import SiteLogo from './logo';

const NavigationBar = () => (
  <navigation>
    <div className={css.logoWrapper}>
      <SiteLogo linkTo="/"><img className={css.logo} alt="logo" src={`${STATIC.img}/logo.png`} /></SiteLogo>
    </div>
    <ul className={css.topLevel}>
      <li><span className={css.label}>Join</span></li>
      <li><span className={css.label}>About Us</span>
        <ul className={css.subNavigation}>
          <li>Rules</li>
          <li>Ranks</li>
          <li>Commands</li>
          <li>History</li>
          <li>Who We Are</li>
          <li>Goals</li>
          <li>Blog</li>
        </ul>
      </li>
      <li><span className={css.label}>Stats</span>
        <ul className={css.subNavigation}>
          <li>Server</li>
          <li>Player</li>
          <li>Live Map</li>
        </ul>
      </li>
      <li><span className={css.label}>Gallery</span></li>
      <li><span className={css.label}>Forums</span></li>
      <li><span className={css.label}>Contact</span></li>
      <li><span className={css.label}>( )</span></li>
      <li><span className={css.label}>( )</span></li>
    </ul>
  </navigation>
);

export default NavigationBar;
