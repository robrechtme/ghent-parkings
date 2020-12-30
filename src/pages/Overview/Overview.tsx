import React from 'react';
import { sortBy } from 'lodash-es';
import DocumentTitle from 'react-document-title';
import { Link, RouteComponentProps } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import styles from './Overview.module.css';
import ParkingCard from './_partials/ParkingCard/ParkingCard';
import useParkings from '../../hooks/useParkings';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import Layout from '../../components/Layout/Layout';
import HeaderWithSpinner from '../../components/HeaderWithSpinner/HeaderWithSpinner';
import Card from '../../components/Card/Card';
import ParkingCounter from '../../components/ParkingCounter/ParkingCounter';
import getCapacityColor from '../../helpers/capacityColor';

const Overview: React.FC<RouteComponentProps> = () => {
  const {
    data: parkings, isLoading, error, isValidating,
  } = useParkings();
  return (
    <DocumentTitle title="Ghent Parkings">
      <Layout>
        <HeaderWithSpinner loading={isValidating}>Parkings</HeaderWithSpinner>
        {error && <ErrorMessage details={error.toString()} />}
        {!isLoading
          && !error
          &&
          <>
            <MapContainer className={styles.mapContainer} center={[51.049999, 3.733333]} zoom={14}>
              <TileLayer
                maxZoom={20}
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
              />
              {parkings.map(parking => (
                <Marker
                  key={parking.fields.id}
                  position={[parking.geometry.coordinates[1], parking.geometry.coordinates[0]]}
                  icon={L.icon({
                    iconUrl: `/marker-${getCapacityColor(parking.fields.availablecapacity / parking.fields.totalcapacity_test)}.svg`,
                    iconSize: [36, 36],
                    iconAnchor: [18, 36],
                    popupAnchor: [0, -36],
                  })}
                >
                  <Popup minWidth={200}>
                    <Card.Content>
                      <Card.ContentHeader>{parking.fields.name}</Card.ContentHeader>
                      <p>
                        {parking.fields.address}
                        <br />
                        <a href={`https://www.google.com/maps/dir/?api=1&travelmode=driving&destination=${parking.geometry.coordinates[1]},${parking.geometry.coordinates[0]}`} target="_blank" rel="noreferrer">Directions</a>
                      </p>
                      <div>
                        <Link to={`/p/${parking.fields.id}`}>Details</Link>
                      </div>
                    </Card.Content>
                    <ParkingCounter available={parking.fields.availablecapacity} total={parking.fields.totalcapacity_test} />
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
            {sortBy(parkings, 'fields.name').map((record) => (
              <ParkingCard key={record.fields.id} parking={record} />
            ))}
          </>
        }
      </Layout>
    </DocumentTitle>
  );
};

export default Overview;
