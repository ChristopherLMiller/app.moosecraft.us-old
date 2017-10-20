import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import misc from 'src/styles/misc.scss';
import styles from './style.scss';

class ServerStatus extends React.PureComponent {
  static propTypes = {
    server: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      status: 'grey',
      interval: 60000,
    };
    this.loadStatus = this.loadStatus.bind(this);
  }

  componentDidMount() {
    this.loadStatus();
    this.timeout = setInterval(this.loadStatus, this.state.interval);
  }

  componentWillUnmount() {
    clearInterval(this.timeout);
  }

  updateState(response) {
    let interval = 0;
    switch (response.data.status) {
      case 'yellow':
        interval = 30000;
        break;
      case 'red':
        interval = 15000;
        break;
      default:
        interval = 60000;
        break;
    }
    this.setState({
      status: response.data.status,
      interval,
    });
  }

  async loadStatus() {
    let response;
    try {
      // eslint-disable-next-line compat/compat
      response = this.updateState(await fetch(`//api.moosecraft.us/api/server/status/${this.props.server}`));
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(`Server Status failed to fetch: ${this.props.server}`);
    }

    return response;
  }

  render() {
    switch (this.state.status) {
      case 'green':
        return (
          <div className={classNames(styles.status_green, misc.center)}><button>{this.props.server}</button></div>
        );
      case 'yellow':
        return (
          <div className={classNames(styles.status_yellow, misc.center)}><button>{this.props.server}</button></div>
        );
      case 'red':
        return (
          <div className={classNames(styles.status_red, misc.center)}><button>{this.props.server}</button></div>
        );
      default:
        return (
          <div className={classNames(misc.center)}><button>{this.props.server}</button></div>
        );
    }
  }
}

export default ServerStatus;
