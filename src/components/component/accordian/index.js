import React from 'react';
import AnimateHeight from 'react-animate-height';

import Column from 'src/components/layout/column';

import layout from 'src/styles/layout.scss';
import styles from './style.scss';

export class Accordian extends React.PureComponent {
  render() {
    return (
      <Column width={layout.one_third} title={this.props.title} icon={this.props.icon}>
        <ul className={styles.accordian_container}>
          {this.props.children}
        </ul>
      </Column>
    );
  }
}

export class Panel extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      height: '0',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState({
      visible: !this.state.visible,
      height: this.state.visible ? '0' : 'auto',
    });
  }

  render() {
    return (
      <li className={styles.accordian} key={this.props.title}>
        <button onClick={this.handleClick}>{this.props.title}</button>
        <AnimateHeight duration={500} height={this.state.height}>
          <div className={styles.panel}>
            {this.props.children}
          </div>
        </AnimateHeight>
      </li>
    );
  }
}
