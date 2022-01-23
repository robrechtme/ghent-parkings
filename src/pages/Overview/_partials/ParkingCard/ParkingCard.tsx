import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styles from './ParkingCard.module.css';
import Card from '../../../../components/Card/Card';
import ParkingCounter from '../../../../components/ParkingCounter/ParkingCounter';
import { ParkingRecord } from '../../../../types/parking';

type Props = {
  parking: ParkingRecord;
};

const ParkingCard: React.FC<Props> = ({ parking }) => {
  const { t } = useTranslation();
  return (
    <Card className={styles.ParkingCard}>
      <Card.Content>
        <Card.ContentHeader className={styles.header}>{parking.fields.name}</Card.ContentHeader>
        <p>
          {parking.fields.description}
          <br />
          <a
            href={`https://www.google.com/maps/dir/?api=1&travelmode=driving&destination=${parking.geometry.coordinates[1]},${parking.geometry.coordinates[0]}`}
            target="_blank"
            rel="noreferrer"
          >
            {t('directions')}
          </a>
        </p>
        <div className={styles.buttonContainer}>
          <Link to={`/p/${encodeURIComponent(parking.fields.id)}`} className={styles.button}>
            {t('details')}
          </Link>
        </div>
      </Card.Content>
      <Card.Aside className={styles.capacity}>
        <ParkingCounter available={parking.fields.availablecapacity} total={parking.fields.totalcapacity} />
      </Card.Aside>
    </Card>
  );
};

export default ParkingCard;
