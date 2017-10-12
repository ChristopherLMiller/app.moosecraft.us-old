import React from 'react';
import classNames from 'classnames';
import Helmet from 'react-helmet';

import Column from 'src/components/layout/column';
import Heading from 'src/components/component/heading';

import misc from 'src/styles/misc.scss';
import layout from 'src/styles/layout.scss';
import colors from 'src/styles/colors.scss';

class Rules extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    };
  }

  componentWillMount() {
    // get the rules here
  }

  render() {
    return (
      <div className="content">
        <Heading title="Server Rules" />

        <div className={classNames(layout.container, layout.box_width)}>
          <div className={layout.row}>
            <Column width={layout.one_full} title="Server Rules" classes={classNames(colors.background_white, misc.box_shadow)}>
              <p className={misc.side_padding}>The following rules must be read and adhered to at all times while playing on the server.  Breaking any of these rules will result in jail time and depending on severity can result in a ban.</p>
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

export default Rules;
