import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import styles from 'src/styles/styles.scss';

class ServerStatus extends React.Component {
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

  loadStatus() {
    axios.get(`https://api.moosecraft.us/api/server/status/${this.props.server}`)
    .catch(({ error }) => console.log(error))
    .then(response => this.updateState(response));
  }

  render() {
    switch (this.state.status) {
      case 'green':
        return (
          <div className={styles.green}><button>{this.props.server}</button></div>
        );
      case 'yellow':
        return (
          <div className={styles.yellow}><button>{this.props.server}</button></div>
        );
      case 'red':
        return (
          <div className={styles.red}><button>{this.props.server}</button></div>
        );
      default:
        return (
          <div><button>{this.props.server}</button></div>
        );
    }
  }
}

ServerStatus.propTypes = {
  server: PropTypes.string.isRequired,
};

export default ServerStatus;
