import React from 'react';

import { STATIC } from '../../../config/project';

import css from '../../styles/styles.scss';

const SocialIcon = ({ network, link }) => (
  <a href={link}><img src={`${STATIC.img}/social/${network}.png`} alt={network} className={css.padding} /></a>
);

SocialIcon.propTypes = {
  network: React.PropTypes.string.isRequired,
  link: React.PropTypes.string.isRequired,
};

export default SocialIcon;
