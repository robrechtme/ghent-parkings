import React from 'react';
import styles from './ParkingCounter.module.css';
import cx from 'classnames';

type ParkingCounterProps = {
  available: number;
  total: number;
};

const ParkingCounter = ({ available, total }: ParkingCounterProps): React.ReactElement => {
  const ratio = available / total;
  let className;
  if (ratio > 0.5) {
    className = styles.green;
  } else if (ratio > 0.1) {
    className = styles.orange;
  } else {
    className = styles.red;
  }
  return (
    <div className={styles.ParkingCounter}>
      <span className={cx(className, styles.counter)}>{available}</span> / {total}
      <div className={styles.legend}>available / total</div>
    </div>
  );
};

export default ParkingCounter;
