import React from 'react';

import css from './header.scss';

import NavigationBar from '../../layout/navigation';

const Header = () => (
  <div className={css.navWrapper}>
    <NavigationBar />
  </div>
);

export default Header;
