'use client';

import dynamic from 'next/dynamic';
import { useTranslations } from 'next-intl';
import Card from '@/components/Card/Card';
import ErrorMessage from '@/components/ErrorMessage/ErrorMessage';
import HeaderWithSpinner from '@/components/HeaderWithSpinner/HeaderWithSpinner';
import Layout from '@/components/Layout/Layout';
import ParkingCounter from '@/components/ParkingCounter/ParkingCounter';
import useParkings from '@/hooks/useParkings';
import type { ParkingRecord } from '@/types/parking';
import styles from './details.module.css';
import NotFoundView from './NotFoundView';

const DetailsMap = dynamic(() => import('./DetailsMap'), { ssr: false });

type LocationMeta = {
  roadName?: string;
  contactDetailsTelephoneNumber?: string;
};

type Props = {
  id: string;
  initialData: ParkingRecord[];
};

const DetailsView = ({ id, initialData }: Props) => {
  const { data, isLoading, error, isValidating } = useParkings(id, { fallbackData: initialData });
  const parking = data?.[0];
  const t = useTranslations();

  if (!isLoading && !error && !parking) {
    return <NotFoundView id={id} />;
  }

  let meta: LocationMeta = {};
  if (parking) {
    try {
      meta = JSON.parse(parking.fields.locationanddimension) as LocationMeta;
    } catch {
      meta = {};
    }
  }

  const [lng, lat] = parking?.geometry.coordinates ?? [0, 0];

  return (
    <Layout backButtonURL="/">
      <HeaderWithSpinner loading={isValidating}>
        {t('detail.title')}
        {parking && ` - ${parking.fields.name}`}
      </HeaderWithSpinner>
      {error && <ErrorMessage details={error.toString()} />}
      {parking && (
        <Card className={styles.card}>
          <Card.Content>
            <Card.ContentHeader>{parking.fields.name}</Card.ContentHeader>
            <h4>{t('detail.address')}</h4>
            <p>
              {meta.roadName}
              <br />
              <a
                href={`https://www.google.com/maps/dir/?api=1&travelmode=driving&destination=${lat},${lng}`}
                target="_blank"
                rel="noreferrer"
              >
                {t('directions')}
              </a>
            </p>
            <h4>{t('detail.contactInfo')}</h4>
            <p>{meta.contactDetailsTelephoneNumber}</p>
            <h4>{t('detail.openingtimes')}</h4>
            <p>{parking.fields.openingtimesdescription}</p>
          </Card.Content>
          <Card.Aside>
            <ParkingCounter
              available={parking.fields.availablecapacity}
              total={parking.fields.totalcapacity}
            />
            <DetailsMap
              lat={lat}
              lng={lng}
              ratio={parking.fields.availablecapacity / parking.fields.totalcapacity}
            />
          </Card.Aside>
        </Card>
      )}
    </Layout>
  );
};

export default DetailsView;
