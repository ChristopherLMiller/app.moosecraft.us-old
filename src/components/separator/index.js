import React from 'react';
import PropTypes from 'prop-types';

const Separator = ({ height, color }) => (
  <div
    style={{
      width: '100%',
      height: `${height}px`,
      background: `${color}`,
    }} />
);

Separator.propTypes = {
  height: PropTypes.number,
  color: PropTypes.string,
};

Separator.defaultProps = {
  height: 10,
  color: '#FFFFFF',
};

export default Separator;
