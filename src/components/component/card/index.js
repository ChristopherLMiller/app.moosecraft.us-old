import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';

import Column from 'src/components/layout/column';

import colors from 'src/styles/colors.scss';
import misc from 'src/styles/misc.scss';

const Card = ({ title, width, icon, text }) => (
  <Column title={title} width={width} classes={classNames(colors.background_white, misc.box_shadow, misc.center)}>
    <FontAwesome name={icon} className={colors.text_grey} style={{ fontSize: '6em', marginTop: '20px' }} />
    <p>{text}</p>
  </Column>
);

Card.propTypes = {
  title: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Card;
