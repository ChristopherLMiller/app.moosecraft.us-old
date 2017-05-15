import React from 'react';

import css from './footer.scss';

import ColumnOneThird from '../column/one-third';
import SocialIcon from '../../components/socialIcon';

const Footer = () => (
  <footer className={css.footer}>
    <div className={css.row}>
      <ColumnOneThird title="Server Statuses">
        <p>Moosecraft Status</p>
        <p>Mojang Status</p>
      </ColumnOneThird>
      <ColumnOneThird title="Support Our Server">
        <p>Hosting this server isn't the cheapest thing in the world.  We do it because we love the
        game but if you would like to help please feel free to donate.</p>
      </ColumnOneThird>
      <ColumnOneThird title="Connect With Us">
        <p>
          <SocialIcon network="facebook" link="https://www.facebook.com/MoosemanStudios" />
          <SocialIcon network="twitter" link="https://twitter.com/moosemanstudios" />
          <SocialIcon network="google-plus" link="https://plus.google.com/106226721854133951147" />
        </p>
      </ColumnOneThird>
    </div>
  </footer>
);

export default Footer;
