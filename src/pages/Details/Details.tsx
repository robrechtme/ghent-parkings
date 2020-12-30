import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import DocumentTitle from 'react-document-title';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import L from 'leaflet';
import styles from './Details.module.css';
import Card from '../../components/Card/Card';
import useParkings from '../../hooks/useParkings';
import ParkingCounter from '../../components/ParkingCounter/ParkingCounter';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import Layout from '../../components/Layout/Layout';
import WEEKDAYS from '../../constants/weekdays';
import ErrorPage from '../ErrorPage/ErrorPage';
import HeaderWithSpinner from '../../components/HeaderWithSpinner/HeaderWithSpinner';
import getCapacityColor from '../../helpers/capacityColor';

type Props = {
  id: string;
};

const Details: React.FC<RouteComponentProps<Props>> = ({ match }) => {
  const { id } = match.params;
  const {
    data, isLoading, error, isValidating,
  } = useParkings(id);
  const parking = data && data[0];

  if (!isLoading && !error && !parking) {
    return <ErrorPage message="This page does not exist." details={`Parking with id "${id}" not found.`} />;
  }

  const title = !isLoading && !error ? `${parking.fields.name} | Ghent Parkings` : 'Ghent Parkings';
  const openingtimes = !isLoading && !error ? JSON.parse(parking.fields.newopeningtimes) : null;
  return (
    <DocumentTitle title={title}>
      <Layout backButtonURL="/">
        <HeaderWithSpinner loading={isValidating}>
          Parkings
          {' '}
          {!isLoading && !error && `- ${parking.fields.name}`}
        </HeaderWithSpinner>
        {error && <ErrorMessage details={error.toString()} />}
        {!isLoading && !error && (
          <Card className={styles.card}>
            <Card.Content>
              <Card.ContentHeader>{parking.fields.name}</Card.ContentHeader>
              <h4>Address</h4>
              <p>
                {parking.fields.address}
                <br />
                <a href={`https://www.google.com/maps/dir/?api=1&travelmode=driving&destination=${parking.geometry.coordinates[1]},${parking.geometry.coordinates[0]}`} target="_blank" rel="noreferrer">Directions</a>
              </p>
              <h4>Contact information</h4>
              <p>{parking.fields.contactinfo}</p>
              <h4>Opening hours</h4>
              <table>
                <tbody>
                  {openingtimes.days.map((day: string) => (
                    <tr key={day}>
                      <th>{WEEKDAYS[day]}</th>
                      <td>
                        {openingtimes.from}
                        {' '}
                        -
                        {openingtimes.to}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div />
            </Card.Content>
            <Card.Aside>
              <ParkingCounter
                available={parking.fields.availablecapacity}
                total={parking.fields.totalcapacity_test}
              />
              <MapContainer className={styles.mapContainer} center={[parking.geometry.coordinates[1], parking.geometry.coordinates[0]]} zoom={16}>
                <TileLayer
                  attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker
                  position={[parking.geometry.coordinates[1], parking.geometry.coordinates[0]]}
                  icon={L.icon({
                    iconUrl: `/marker-${getCapacityColor(parking.fields.availablecapacity / parking.fields.totalcapacity_test)}.svg`,
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
