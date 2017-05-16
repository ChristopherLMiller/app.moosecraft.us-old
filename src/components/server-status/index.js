import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

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
    setInterval(this.loadStatus, this.state.interval);
  }

  updateState(response) {
    this.setState({
      status: response.data.status,
    });
  }

  loadStatus() {
    axios.get(`https://api.moosecraft.us/api/server/status/${this.props.server}`)
    .catch(({ error }) => console.log(error))
    .then(response => this.updateState(response));
  }

  render() {
    return (
      <div className={this.state.status}>IP: {this.props.server}</div>
    );
  }
}

ServerStatus.propTypes = {
  server: PropTypes.string.isRequired,
};

export default ServerStatus;
