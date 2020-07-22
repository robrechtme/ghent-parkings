import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import styles from './Details.module.css';
import Card from '../../components/Card/Card';
import useParkings from '../../hooks/useParkings';
import ParkingCounter from '../../components/ParkingCounter/ParkingCounter';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import Layout from '../../components/Layout/Layout';
import { WEEKDAYS } from '../../constants/weekdays';
import DocumentTitle from 'react-document-title';
import ErrorPage from '../ErrorPage/ErrorPage';
import HeaderWithSpinner from '../../components/HeaderWithSpinner/HeaderWithSpinner';

type Props = {
  id: string;
};

const Details: React.FC<RouteComponentProps<Props>> = ({ match }) => {
  const { id } = match.params;
  const { data, isLoading, error, isValidating } = useParkings(id);
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
          Parkings {!isLoading && !error && `- ${parking.fields.name}`}
        </HeaderWithSpinner>
        {error && <ErrorMessage details={error.toString()} />}
        {!isLoading && !error && (
          <Card className={styles.card}>
            <Card.Content>
              <Card.ContentHeader>{parking.fields.name}</Card.ContentHeader>
              <h4>Address</h4>
              <p>{parking.fields.address}</p>
              <h4>Contact information</h4>
              <p>{parking.fields.contactinfo}</p>
              <h4>Opening hours</h4>
              <table>
                <tbody>
                  {openingtimes.days.map((day: string) => (
                    <tr key={day}>
                      <th>{WEEKDAYS[day]}</th>
                      <td>
                        {openingtimes.from} - {openingtimes.to}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div />
            </Card.Content>
            <Card.Aside>
              <ParkingCounter available={parking.fields.availablecapacity} total={parking.fields.totalcapacity_test} />
            </Card.Aside>
          </Card>
        )}
      </Layout>
    </DocumentTitle>
  );
};

export default Details;
