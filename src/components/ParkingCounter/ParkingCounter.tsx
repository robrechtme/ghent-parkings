import React from 'react';
import cx from 'classnames';
import { useTranslation } from 'react-i18next';
import styles from './ParkingCounter.module.css';
import getCapacityColor from '../../helpers/capacityColor';

type Props = {
  available: number;
  total: number;
};

const ParkingCounter: React.FC<Props> = ({ available, total }) => {
  // Set color based on availability ratio
  const color = getCapacityColor(available / total);
  const { t } = useTranslation();
  return (
    <div className={styles.ParkingCounter}>
      <span className={cx(styles[color], styles.counter)}>{available}</span> /{total}
      <div className={styles.legend}>{t('ratio')}</div>
    </div>
  );
};

export default ParkingCounter;
