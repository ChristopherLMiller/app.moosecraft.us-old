import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import CountUp from 'react-countup';

import Column from 'src/components/layout/column';

import colors from 'src/styles/colors.scss';
import misc from 'src/styles/misc.scss';
import styles from './style.scss';

// eslint-disable-next-line react/prefer-stateless-function
class Card extends React.PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired,
    icon: PropTypes.string,
    value: PropTypes.string,
    text: PropTypes.string.isRequired,
  };

  static defaultProps = {
    icon: null,
    value: null,
  };

  render() {
    if (this.props.icon) {
      return (
        <Column title={this.props.title} width={this.props.width} classes={classNames(colors.background_white, misc.box_shadow, misc.center)}>
          <FontAwesome name={this.props.icon} className={colors.text_grey} style={{ fontSize: '6em', marginTop: '20px' }} />
          <p>{this.props.text}</p>
        </Column>
      );
    } else if (this.props.value) {
      return (
        <Column title={this.props.title} width={this.props.width} classes={classNames(colors.background_white, misc.box_shadow, misc.center)}>
          <CountUp start={0} end={this.props.value} className={styles.count_up} />
          <p>{this.props.text}</p>
        </Column>
      );
    }

    return (
      <Column title={this.props.title} width={this.props.width} classes={classNames(colors.background_white, misc.box_shadow, misc.center)}>
        <p>{this.props.text}</p>
      </Column>
    );
  }
}

export default Card;
