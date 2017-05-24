import React from 'react';
import PropTypes from 'prop-types';

import { STATIC } from 'config/project';

import styles from 'src/styles/styles.scss';

const SocialIcon = ({ network, link }) => (
  <a href={link}><img src={`${STATIC.img}/social/${network}.png`} alt={network} className={styles.padding} /></a>
);

SocialIcon.propTypes = {
  network: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default SocialIcon;
