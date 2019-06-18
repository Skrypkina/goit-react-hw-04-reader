import React from 'react';
import PropTypes from 'prop-types';
import styles from './Reader.module.css';

const Counter = ({ current, total }) => (
  <p className={styles.counter}>
    {current}/{total}
  </p>
);

Counter.propTypes = {
  current: PropTypes.number,
  total: PropTypes.number,
};

export default Counter;
