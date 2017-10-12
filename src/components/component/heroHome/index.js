import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import { STATIC } from 'config/project';

import styles from './style.scss';

class heroHome extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    };
    this.setLoaded = this.setLoaded.bind(this);
  }

  componentDidMount() {
    this.timeout = setTimeout(this.setLoaded, 500);
  }

  setLoaded() {
    this.setState({ isLoading: false });
  }

  render() {
    return (
      <div className={styles.hero}>
        <div className={styles.sign} style={!this.state.isLoading ? { top: '-185px' } : { top: '-670px' }}>
          <div className={styles.logo}>
            <Link to="/"><img alt="logo" src={`${STATIC.img}/logo.png`} /></Link>
          </div>
        </div>
        <div className={styles.mob} style={!this.state.isLoading ? { right: '-80px' } : { right: '-390px' }}>
          <div className={classNames(styles.talk_bubble)}>
            <div className={styles.talktext}>
              <p>SSSssSSs<br />SsSsSsSS</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default heroHome;
