import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Details.module.css';
import Card from '../components/Card/Card';
import useParking from '../hooks/useParking';
import Spinner from '../components/Spinner/Spinner';

const Details = ({ match }) => {
  const { id } = match.params;
  const { parking, isLoading, isError } = useParking(id);

  return (
    <div className={styles.container}>
      <Link to="/">&lt; Back</Link>
      <h1>Details</h1>
      {isError && <span>Something went wrong.</span>}
      {isLoading && <Spinner />}
      {!isLoading && !isError && (
      <Card>
        <Card.Header>{parking.fields.name}</Card.Header>
        <div>{parking.fields.address}</div>
        <div>{parking.fields.contactinfo}</div>
        <div>{parking.fields.newopeningtimes}</div>
      </Card>
      )}

    </div>
  );
};

export default Details;
