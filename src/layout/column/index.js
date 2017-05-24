import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from 'src/styles/styles.scss';

const Column = ({ title, classes, children }) => {
  if (title) {
    return (
      <div className={classNames(styles.column, classes)}>
        <h3 className={styles.center}>{title}</h3>
        <div className={styles.content}>
          {children}
        </div>
      </div>
    );
  }

  return (
    <div className={classNames(styles.column_base, classes)}>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
};

Column.propTypes = {
  title: PropTypes.string,
  classes: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array, PropTypes.string]),
};

Column.defaultProps = {
  title: null,
  classes: null,
  children: null,
};

export default Column;
