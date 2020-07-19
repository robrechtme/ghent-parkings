import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Details.module.css';
import Card from '../../components/Card/Card';
import useParking from '../../hooks/useParking';
import Spinner from '../../components/Spinner/Spinner';
import ParkingCounter from '../../components/ParkingCounter/ParkingCounter';
import { ReactComponent as Back } from '../../assets/back.svg';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import Layout from '../../components/Layout/Layout';
import { weekdays } from '../../constants/weekdays';

const Details = ({ match }) => {
  const { id } = match.params;
  const { parking, isLoading, isError, isValidating } = useParking(id);

  const openingtimes = !isLoading && !isError ? JSON.parse(parking.fields.newopeningtimes) : null;
  return (
    <Layout>
      <Link to="/" className={styles.backButton}>
        <span className={styles.backButtonIcon}><Back /></span> Back
      </Link>
      <div className={styles.header}>
        <h1>Parkings {!isLoading && !isError && `- ${parking.fields.name}`}</h1>
        {isValidating && <Spinner />}
      </div>
      {isError && <ErrorMessage error={isError} />}
      {!isLoading && !isError && (
        <Card>
          <Card.Content>
            <Card.ContentHeader>{parking.fields.name}</Card.ContentHeader>
            <h4>Address</h4>
            <p>{parking.fields.address}</p>
            <h4>Contact information</h4>
            <p>{parking.fields.contactinfo}</p>
            <h4>Opening hours</h4>
            <table>
              <tbody>
                {openingtimes.days.map(day => (
                  <tr key={day}>
                    <th>{weekdays[day]}</th>
                    <td>{openingtimes.from} - {openingtimes.to}</td>
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
  );
};

export default Details;
