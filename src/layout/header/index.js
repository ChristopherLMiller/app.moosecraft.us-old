import React from 'react';

import { STATIC } from '../../../config/project';
import css from './header.scss';

import SiteLogo from '../../components/logo';

const Header = () => (
  <navigation className={css.fixed}>
    <SiteLogo linkTo="/"><img className={css.logo} alt="logo" src={`${STATIC.img}/logo.png`} /></SiteLogo>
    <ul>
      <li><span className="text">Join</span></li>
      <li className={css.hasChildren}><span className="text">About Us</span>
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
      <li className={css.hasChildren}><span className="text">Stats</span>
        <ul className={css.subNavigation}>
          <li>Server</li>
          <li>Player</li>
          <li>Live Map</li>
        </ul>
      </li>
      <li><span className="text">Gallery</span></li>
      <li><span className="text">Forums</span></li>
      <li><span className="text">Contact</span></li>
      <li><span className="text">( )</span></li>
      <li><span className="text">( )</span></li>
    </ul>
  </navigation>
);

export default Header;
