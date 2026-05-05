'use client';

import L from 'leaflet';
import { useTranslations } from 'next-intl';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import Card from '@/components/Card/Card';
import ParkingCounter from '@/components/ParkingCounter/ParkingCounter';
import getCapacityColor from '@/helpers/capacityColor';
import { Link } from '@/i18n/navigation';
import type { ParkingRecord } from '@/types/parking';
import styles from './overview.module.css';

type Props = {
  parkings: ParkingRecord[];
};

const buildIcon = (ratio: number) =>
  L.icon({
    iconUrl: `/marker-${getCapacityColor(ratio)}.svg`,
    iconSize: [36, 36],
    iconAnchor: [18, 36],
    popupAnchor: [0, -36],
  });

const OverviewMap = ({ parkings }: Props) => {
  const t = useTranslations();
  return (
    <MapContainer className={styles.mapContainer} center={[51.049999, 3.725]} zoom={14}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {parkings.map((parking) => {
        const [lng, lat] = parking.geometry.coordinates;
        return (
          <Marker
            key={parking.fields.id}
            position={[lat, lng]}
            icon={buildIcon(parking.fields.availablecapacity / parking.fields.totalcapacity)}
          >
            <Popup minWidth={200}>
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
                <div>
                  <Link href={`/p/${encodeURIComponent(parking.fields.id)}`}>{t('details')}</Link>
                </div>
              </Card.Content>
              <ParkingCounter
                available={parking.fields.availablecapacity}
                total={parking.fields.totalcapacity}
              />
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
};

export default OverviewMap;
