import React from 'react';
import classNames from 'classnames';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';

import Column from 'src/components/layout/column';
import Heading from 'src/components/component/heading';
import firebase from 'src/firebase/firebase';
import { Accordian, Panel } from 'src/components/component/accordian';

import { addServerRule } from 'src/store/actions';

import misc from 'src/styles/misc.scss';
import layout from 'src/styles/layout.scss';
import colors from 'src/styles/colors.scss';

@connect(state => ({ rules: state.serverRules[0] }))
class Rules extends React.PureComponent {
  constructor(props) {
    super(props);
    this.showPanel = this.showPanel.bind(this);
    this.state = {
      isVisible: false,
    };
  }
  componentDidMount() {
    const fbRef = firebase.database().ref('server-rules');
    fbRef.on('value', snapshot => {
      this.props.dispatch(addServerRule(snapshot.val()));
    });
  }

  showPanel(e) {
    this.setState = {
      isVisible: !this.state.isVisible,
    };
    console.log('ive been clicked');
  }

  render() {
    let categories;

    // check ensures that the firebase data has been fetched to act upon
    if (this.props.rules !== undefined) {
      // map of categories
      categories = Object.keys(this.props.rules.categories).map(key => {
        const category = this.props.rules.categories[key];

        // map the rules in each category
        const rules = Object.keys(category.rules).map(ruleKey => {
          const rule = category.rules[ruleKey];

          // rule object
          return (
            <Panel title={rule.name}>
              <p>{rule.description}</p>
            </Panel>
          );
        });

        // category object
        return (
          <Accordian title={category.name} icon={category.icon}>
            {rules}
          </Accordian>
        );
      });

      console.log(categories);
    }

    return (
      <div className="content">
        <Heading title="Server Rules" />

        <div className={classNames(layout.container, layout.box_width)}>
          <div className={layout.row}>
            <Column width={layout.one_half} title="Fair Play" classes={classNames(colors.background_white, misc.box_shadow)}>
              <p className={misc.side_padding}>At Moosecraft we believe in fair play for all players.  The following rules have come about from various situations over time involving players and situations we have come across.</p>
              <p className={misc.side_padding}>These rules can and will be changed over time and as such we have built in a method to let you the player know very easily when something has changed.</p>
              <p className={misc.side_padding}>With that said we ask that you take the time to read them now to avoid issues in the future.</p>
            </Column>
            <Column width={layout.one_half} title="Staff Ruling" classes={classNames(colors.background_white, misc.box_shadow)}>
              <p className={misc.side_padding}>At the end of the day our moderation staff have the final say in anything listed here. It is up to them to interpret the rules and apply them as fairly as possible.  If you don't agree with what a staff member has decided you can always submit a ticket for another staff member to review.</p>
            </Column>
          </div>
          <div className={layout.row}>
            {categories}
          </div>
        </div>

        <Helmet>
          <title>Server Rules</title>
        </Helmet>
      </div>
    );
  }
}

export default Rules;
