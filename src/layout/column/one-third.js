import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import css from './columns.scss';
import global from '../../styles/styles.scss';

const ColumnOneThird = ({ title, classes, children }) => {
  if (title) {
    return (
      <div className={classNames(css.one_third, classes)}>
        <h3 className={global.center}>{title}</h3>
        <div className={css.content}>
          {children}
        </div>
      </div>
    );
  }

  return (
    <div className={classNames(css.one_third, classes)}>
      <div className={css.content}>
        {children}
      </div>
    </div>
  );
};

ColumnOneThird.propTypes = {
  title: PropTypes.string,
  classes: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array, PropTypes.string]),
};

ColumnOneThird.defaultProps = {
  title: null,
  classes: null,
  children: null,
};

export default ColumnOneThird;
