'use client';

import L from 'leaflet';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import getCapacityColor from '@/helpers/capacityColor';
import styles from './details.module.css';

type Props = {
  lat: number;
  lng: number;
  ratio: number;
};

const DetailsMap = ({ lat, lng, ratio }: Props) => (
  <MapContainer className={styles.mapContainer} center={[lat, lng]} zoom={16}>
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker
      position={[lat, lng]}
      icon={L.icon({
        iconUrl: `/marker-${getCapacityColor(ratio)}.svg`,
        iconSize: [36, 36],
        iconAnchor: [18, 36],
        popupAnchor: [0, -36],
      })}
    />
  </MapContainer>
);

export default DetailsMap;
