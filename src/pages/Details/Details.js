import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Details.module.css';
import Card from '../../components/Card/Card';
import useParking from '../../hooks/useParking';
import Spinner from '../../components/Spinner/Spinner';
import ParkingCounter from '../../components/ParkingCounter/ParkingCounter';
import { ReactComponent as Back } from '../../assets/back.svg';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';

const Details = ({ match }) => {
  const { id } = match.params;
  const { parking, isLoading, isError, isValidating } = useParking(id);

  const openingtimes = !isLoading && !isError ? JSON.parse(parking.fields.newopeningtimes) : null;
  return (
    <div className={styles.Details}>
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
          <Card.Header>{parking.fields.name}</Card.Header>
          <p>{parking.fields.address}</p>
          <p>{parking.fields.contactinfo}</p>
          <h4>Openingsuren</h4>
          <table>
            <tbody>
              {openingtimes.days.map(day => (
                <tr key={day}>
                  <td>{day}</td>
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

    </div>
  );
};

export default Details;
