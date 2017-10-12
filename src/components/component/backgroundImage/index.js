import React from 'react';
import PropTypes from 'prop-types';

const BackgroundImage = ({ url }) => (
  <div style={{ background: `url(${url}) no-repeat center center`, backgroundSize: 'cover', height: '100%', minHeight: '250px' }}/>
);

BackgroundImage.PropTypes = {
  url: PropTypes.string.isRequired,
};

export default BackgroundImage;
