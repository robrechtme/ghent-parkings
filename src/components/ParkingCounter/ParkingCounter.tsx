'use client';

import cx from 'classnames';
import { useTranslations } from 'next-intl';
import getCapacityColor from '@/helpers/capacityColor';
import styles from './ParkingCounter.module.css';

type Props = {
  available: number;
  total: number;
};

const ParkingCounter = ({ available, total }: Props) => {
  const color = getCapacityColor(available / total);
  const t = useTranslations();
  return (
    <div className={styles.ParkingCounter}>
      <span className={cx(styles[color], styles.counter)}>{available}</span> /{total}
      <div className={styles.legend}>{t('ratio')}</div>
    </div>
  );
};

export default ParkingCounter;
