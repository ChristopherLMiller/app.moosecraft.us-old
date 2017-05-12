import React from 'react';

const SocialIcon = ({ network, link }) => (
  <a href={link}><img src={`${network}.png`} alt={network} /></a>
);

SocialIcon.propTypes = {
  network: React.PropTypes.string.isRequired,
  link: React.PropTypes.string.isRequired,
};

export default SocialIcon;
