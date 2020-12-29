import React from 'react';
import cx from 'classnames';
import styles from './ParkingCounter.module.css';

type Props = {
  available: number;
  total: number;
};

const ParkingCounter: React.FC<Props> = ({ available, total }) => {
  // Set color based on availability ratio
  const ratio = available / total;
  let className;
  if (ratio >= 0.5) {
    className = styles.green;
  } else if (ratio >= 0.1) {
    className = styles.orange;
  } else {
    className = styles.red;
  }
  return (
    <div className={styles.ParkingCounter}>
      <span className={cx(className, styles.counter)}>{available}</span>
      {' '}
      /
      {total}
      <div className={styles.legend}>available / total</div>
    </div>
  );
};

export default ParkingCounter;
