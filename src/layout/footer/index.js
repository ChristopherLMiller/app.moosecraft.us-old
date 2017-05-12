import React from 'react';

import css from './footer.scss';

import Column from './column';
import SocialIcon from '../../components/socialIcon';

const Footer = () => (
  <footer className={css.footer}>
    <Column title="Server Statuses">Text</Column>
    <Column title="Support Us">More Text</Column>
    <Column title="Connect With Us">
      <SocialIcon network="facebook" link="http://facebook.com" />
    </Column>
  </footer>
);

export default Footer;
