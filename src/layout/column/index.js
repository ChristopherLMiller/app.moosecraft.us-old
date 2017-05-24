import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from 'src/styles/styles.scss';

const Column = ({ title, width, classes, children }) => {
  if (title) {
    return (
      <div className={classNames(styles.column_base, width, classes)}>
        <h3 className={styles.center}>{title}</h3>
        <div className={styles.content_base}>
          {children}
        </div>
      </div>
    );
  }

  return (
    <div className={classNames(styles.column_base, width, classes)}>
      <div className={styles.content_base}>
        {children}
      </div>
    </div>
  );
};

Column.propTypes = {
  title: PropTypes.string,
  width: PropTypes.string.isRequired,
  classes: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array, PropTypes.string]),
};

Column.defaultProps = {
  title: null,
  classes: null,
  children: null,
};

export default Column;
