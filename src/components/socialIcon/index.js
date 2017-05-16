import React from 'react';
import PropTypes from 'prop-types';

import { STATIC } from '../../../config/project';

import css from '../../styles/styles.scss';

const SocialIcon = ({ network, link }) => (
  <a href={link}><img src={`${STATIC.img}/social/${network}.png`} alt={network} className={css.padding} /></a>
);

SocialIcon.propTypes = {
  network: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default SocialIcon;
