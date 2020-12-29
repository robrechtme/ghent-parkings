import React from 'react';
import cx from 'classnames';
import styles from './ParkingCounter.module.css';
import getCapacityColor from '../../helpers/capacityColor';

type Props = {
  available: number;
  total: number;
};

const ParkingCounter: React.FC<Props> = ({ available, total }) => {
  // Set color based on availability ratio
  const color = getCapacityColor(available / total);

  return (
    <div className={styles.ParkingCounter}>
      <span className={cx(styles[color], styles.counter)}>{available}</span>
      {' '}
      /
      {total}
      <div className={styles.legend}>available / total</div>
    </div>
  );
};

export default ParkingCounter;
