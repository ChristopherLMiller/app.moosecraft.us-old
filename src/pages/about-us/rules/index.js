import React from 'react';
import Helmet from 'react-helmet';
import classNames from 'classnames';
import * as firebase from 'firebase';

import Column from 'src/layout/column';
import { FIREBASE } from 'config/project';
import Group from './group';

import styles from 'src/styles/styles.scss';

class RulesPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      rules: [],
      isLoading: true,
    };
  }

  componentWillMount() {
    const firebaseApp = firebase.initializeApp(FIREBASE.config).database().ref('server-rules/categories');
    firebaseApp.on('child_added', dataSnapshot => {
      const list = this.state.rules;
      list.push(dataSnapshot.val());
      this.setState({
        rules: list,
        isLoading: false, // signify that we have loaded, go ahead and render now
      });
    });
  }

  render() {
    if (!this.state.isLoading) {
      const rules = this.state.rules;
      const ruleNodes = rules.map(category => (
        <Column width={styles.one_half} title={category.name} classes={classNames(styles.background_white, styles.box_shadow)}>
          <Group data={category.rules} />
        </Column>
        ),
      );

      return (
        <div>
          <div className={styles.top_space} />

          <div className={classNames(styles.container, styles.box_width)}>

            <div className={styles.row}>
              <Column width={styles.one_full} title="Server Rules" classes={classNames(styles.background_white, styles.box_shadow)}>
                <p>The following rules must be read and adhered to at all times while playing on our
                server.  Breaking the rules will result in jail time up to and including styles
                minecraft server bans.</p>
              </Column>
            </div>

            <div className={styles.row}>
              {ruleNodes}
            </div>
          </div>
        </div>
      );
    }

    return (
      <div>
        <div className={styles.top_space} />

        <div className={classNames(styles.container, styles.box_width)}>
          <div className={styles.row}>
            <Column width={styles.one_full} title="Server Rules" classes={classNames(styles.background_white, styles.box_shadow)}>
              <p>The following rules must be read and adhered to at all times while playing on our
              server.  Breaking the rules will result in jail time up to and including styles
              minecraft server bans.</p>
            </Column>
          </div>
        </div>

        <Helmet>
          <title>Server Rules</title>
        </Helmet>
      </div>
    );
  }
}

export default RulesPage;
