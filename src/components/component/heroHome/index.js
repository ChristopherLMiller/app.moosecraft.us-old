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
      mobVisible: true,
      mobRight: '-390px',
      mobText1: 'SSSssSSs',
      mobText2: 'SsSsSsSS',
    };
    this.setLoaded = this.setLoaded.bind(this);
    this.clickMob = this.clickMob.bind(this);
  }

  componentDidMount() {
    this.timeout = setTimeout(this.setLoaded, 500);
  }

  setLoaded() {
    this.setState({
      isLoading: false,
      mobVisible: true,
      mobRight: '-80px',
    });
  }

  clickMob() {
    if (this.state.mobVisible) {
      this.setState({
        mobVisible: false,
        mobRight: '-390px',
        mobText1: 'BooOOomM',
        mobText2: '!!!!!!!!!!!!!!!!!!!!!!',
      });
      setTimeout(() => {
        this.setState({
          mobVisible: true,
          mobRight: '-80px',
          mobText1: 'SSSssSSs',
          mobText2: 'SsSsSsSS',
        });
      }, 2000);
    }
  }

  render() {
    return (
      <div className={styles.hero}>
        <div className={styles.sign} style={!this.state.isLoading ? { top: '-185px' } : { top: '-670px' }}>
          <div className={styles.logo}>
            <Link to="/"><img alt="logo" src={`${STATIC.img}/logo.png`} /></Link>
          </div>
        </div>
        <div className={styles.mob} style={{ right: this.state.mobRight }} onClick={this.clickMob}>
          <div className={classNames(styles.talk_bubble)}>
            <div className={styles.talktext}>
              <p>{this.state.mobText1}<br />{this.state.mobText2}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default heroHome;
