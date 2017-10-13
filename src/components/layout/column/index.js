import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import layout from 'src/styles/layout.scss';
import misc from 'src/styles/misc.scss';

const Column = ({ title, width, classes, icon, children }) => {
  if (title) {
    return (
      <div className={classNames(layout.column_base, width, classes)}>
        <h3 className={classNames(misc.text_upper, misc.center)}>{title}</h3>
        <div className={layout.content_base}>
          {children}
        </div>
      </div>
    );
  }

  return (
    <div className={classNames(layout.column_base, width, classes)}>
      <div className={layout.content_base}>
        {children}
      </div>
    </div>
  );
};

Column.propTypes = {
  title: PropTypes.string,
  width: PropTypes.string.isRequired,
  classes: PropTypes.string,
  icon: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array, PropTypes.string]),
};

Column.defaultProps = {
  title: null,
  classes: null,
  icon: null,
  children: null,
};

export default Column;
