import React from 'react';
import PropTypes from 'prop-types';

const BackgroundImage = ({ url }) => (
  <div style={{ background: `url(${url}) no-repeat`, backgroundSize: 'cover', height: '100%' }} />
);

BackgroundImage.propTypes = {
  url: PropTypes.string.isRequired,
};

export default BackgroundImage;
