import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import DocumentTitle from 'react-document-title';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import L from 'leaflet';
import { useTranslation } from 'react-i18next';

import styles from './Details.module.css';
import Card from '../../components/Card/Card';
import useParkings from '../../hooks/useParkings';
import ParkingCounter from '../../components/ParkingCounter/ParkingCounter';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import Layout from '../../components/Layout/Layout';
import ErrorPage from '../ErrorPage/ErrorPage';
import HeaderWithSpinner from '../../components/HeaderWithSpinner/HeaderWithSpinner';
import getCapacityColor from '../../helpers/capacityColor';

type Props = {
  id: string;
};

const Details: React.FC<RouteComponentProps<Props>> = ({ match }) => {
  const { id } = match.params;
  const { data, isLoading, error, isValidating } = useParkings(id);
  const parking = data && data[0];

  const { t } = useTranslation();

  if (!isLoading && !error && !parking) {
    return <ErrorPage message={t('notFound.title')} details={t('notFound.message', { id })} />;
  }

  const title = !isLoading && !error ? `${parking.fields.name} | ${t('title')}` : t('title');
  const meta = !isLoading && !error ? JSON.parse(parking.fields.locationanddimension) : null;

  return (
    <DocumentTitle title={title}>
      <Layout backButtonURL="/">
        <HeaderWithSpinner loading={isValidating}>
          {t('detail.title')}
          {!isLoading && !error && ` - ${parking.fields.name}`}
        </HeaderWithSpinner>
        {error && <ErrorMessage details={error.toString()} />}
        {!isLoading && !error && (
          <Card className={styles.card}>
            <Card.Content>
              <Card.ContentHeader>{parking.fields.name}</Card.ContentHeader>
              <h4>{t('detail.address')}</h4>
              <p>
                {meta.roadName}
                <br />
                <a
                  href={`https://www.google.com/maps/dir/?api=1&travelmode=driving&destination=${parking.geometry.coordinates[1]},${parking.geometry.coordinates[0]}`}
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
              <div />
            </Card.Content>
            <Card.Aside>
              <ParkingCounter available={parking.fields.availablecapacity} total={parking.fields.totalcapacity} />
              <MapContainer
                className={styles.mapContainer}
                center={[parking.geometry.coordinates[1], parking.geometry.coordinates[0]]}
                zoom={16}
              >
                <TileLayer
                  attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker
                  position={[parking.geometry.coordinates[1], parking.geometry.coordinates[0]]}
                  icon={L.icon({
                    iconUrl: `/marker-${getCapacityColor(
                      parking.fields.availablecapacity / parking.fields.totalcapacity,
                    )}.svg`,
                    iconSize: [36, 36],
                    iconAnchor: [18, 36],
                    popupAnchor: [0, -36],
                  })}
                />
              </MapContainer>
            </Card.Aside>
          </Card>
        )}
      </Layout>
    </DocumentTitle>
  );
};

export default Details;
