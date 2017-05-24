import React from 'react';
import classNames from 'classnames';

import styles from 'src/styles/styles.scss';

import Column from 'src/layout/column';
import SocialIcon from 'src/components/socialIcon';
import ServerStatus from 'src/components/server-status';

const Footer = () => (
  <footer className={classNames(styles.container, styles.full_width, styles.background_dark_grey)}>
    <div className={classNames(styles.row, styles.no_margin_vertical)}>
      <Column width={styles.one_third} title="Play Now">
        <p>IP: MC.MOOSECRAFT.US</p>
        <h3>Current Server Status</h3>
        <div className={styles.statusWidget}>
          <ServerStatus server="moosecraft" />
          <ServerStatus server="mojang" />
        </div>
      </Column>
      <Column width={styles.one_third} title="Support Our Server">
        <p>While we run this server because we love the game and wouldn't trade it for anything
        else in the world, hosting this server isn't exactly cheap.  Regardless of player
        donations this server will always be here but we certainly appreciate anything given.</p>
        <p>All donations received stay to the server itself, whether it be towards the internet
        bill, new hardware to allow more players to connect, or even professional builders,
        it all stays here!</p>
        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top" className={styles.center}>
          <input type="hidden" name="cmd" value="_s-xclick" />
          <input type="hidden" name="hosted_button_id" value="XB9NGAP5CWAMW" />
          <button className="" type="submit" name="submit" alt="PayPal - The safer, easier way to pay online!">Donate Now</button>
          <img alt="" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
        </form>
      </Column>
      <Column width={styles.one_third} title="Connect With Us">
        <p>
          <SocialIcon network="facebook" link="https://www.facebook.com/MoosemanStudios" />
          <SocialIcon network="twitter" link="https://twitter.com/moosemanstudios" />
          <SocialIcon network="google-plus" link="https://plus.google.com/106226721854133951147" />
          <SocialIcon network="rss" link="http://api.moosecraft.us/api/articles/feed" />
        </p>
      </Column>
    </div>
  </footer>
);

export default Footer;
