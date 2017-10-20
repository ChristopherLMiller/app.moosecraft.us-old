import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import SiteLogo from 'src/components/component/siteLogo';
import { STATIC } from 'config/project';

import styles from './style.scss';

@connect(state => ({ menu: state.menu }))
class NavigationBar extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
  }

  render() {
    let menuItems;
    if (this.props.menu !== undefined && Array.isArray(this.props.menu)) {
      menuItems = this.props.menu.map(item => {
        let inner;
        if (item.children) {
          const subItems = item.children.map(subItem => (
            <li key={subItem.text}><NavLink to={subItem.link}>{subItem.text}</NavLink></li>
          ));

          inner = <li key={item.text}><span className={styles.label}>{item.text}</span><ul className={styles.subNavigation}>{subItems}</ul></li>;
        } else {
          inner = <li key={item.text}><NavLink to={item.link}><span className={styles.label}>{item.text}</span></NavLink></li>;
        }

        return (
          inner
        );
      });
    }

    return (
      <nav id="nav">
        <div className={styles.logoWrapper}>
          <SiteLogo linkTo="/"><img className={styles.logo} alt="logo" src={`${STATIC.img}/logo.png`} /></SiteLogo>
        </div>
        <ul className={styles.topLevel}>
          {menuItems}
          <li><span className={styles.label}>(C)</span></li>{/* Chat popup */}
          <li><span className={styles.label}>(P)</span></li>
        </ul>
      </nav>
    );
  }
}

export default NavigationBar;
