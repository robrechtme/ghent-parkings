'use client';

import { useTranslations } from 'next-intl';
import Card from '@/components/Card/Card';
import ParkingCounter from '@/components/ParkingCounter/ParkingCounter';
import { Link } from '@/i18n/navigation';
import type { ParkingRecord } from '@/types/parking';
import styles from './parking-card.module.css';

type Props = {
  parking: ParkingRecord;
};

const ParkingCard = ({ parking }: Props) => {
  const t = useTranslations();
  const [lng, lat] = parking.geometry.coordinates;
  return (
    <Card className={styles.ParkingCard}>
      <Card.Content>
        <Card.ContentHeader>{parking.fields.name}</Card.ContentHeader>
        <p>
          {parking.fields.description}
          <br />
          <a
            href={`https://www.google.com/maps/dir/?api=1&travelmode=driving&destination=${lat},${lng}`}
            target="_blank"
            rel="noreferrer"
          >
            {t('directions')}
          </a>
        </p>
        <div className={styles.buttonContainer}>
          <Link href={`/p/${encodeURIComponent(parking.fields.id)}`} className={styles.button}>
            {t('details')}
          </Link>
        </div>
      </Card.Content>
      <Card.Aside>
        <ParkingCounter available={parking.fields.availablecapacity} total={parking.fields.totalcapacity} />
      </Card.Aside>
    </Card>
  );
};

export default ParkingCard;
