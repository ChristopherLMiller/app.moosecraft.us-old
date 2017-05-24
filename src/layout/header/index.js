import React from 'react';

import header from 'src/styles/header.scss';

import NavigationBar from 'src/layout/navigation';

const Header = () => (
  <div className={header.navWrapper}>
    <NavigationBar />
  </div>
);

export default Header;
