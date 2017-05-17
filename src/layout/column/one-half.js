import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import css from './columns.scss';
import global from '../../styles/styles.scss';

const ColumnOneHalf = ({ title, classes, children }) => {
  if (title) {
    return (
      <div className={classNames(css.one_half, classes)}>
        <h3 className={global.center}>{title}</h3>
        <div className={css.content}>
          {children}
        </div>
      </div>
    );
  }

  return (
    <div className={classNames(css.one_half, classes)}>
      <div className={css.content}>
        {children}
      </div>
    </div>
  );
};

ColumnOneHalf.propTypes = {
  title: PropTypes.string.isRequired,
  classes: PropTypes.className,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array, PropTypes.string]).isRequired,
};

ColumnOneHalf.defaultProps = {
  title: null,
  classes: null,
};

export default ColumnOneHalf;
