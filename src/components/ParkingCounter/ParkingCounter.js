import React from 'react';
import styles from './ParkingCounter.module.css';

const ParkingCounter = ({ available, total }) => {
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
      <span className={className}>{available}</span> / {total}
    </div>
  );
};

export default ParkingCounter;
