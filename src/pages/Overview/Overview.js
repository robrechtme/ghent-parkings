import React, { useState } from 'react';
import { sortBy } from 'lodash-es';
import ParkingCard from './_partials/ParkingCard/ParkingCard';
import useParkings from '../../hooks/useParkings';
import Spinner from '../../components/Spinner/Spinner';
import styles from './Overview.module.css';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import Layout from '../../components/Layout/Layout';

const Overview = () => {
  const [parkedId, setParkedId] = useState(null);
  const { parkings, isLoading, isError, isValidating } = useParkings();

  const toggleParkedId = (id) => {
    if (parkedId === id) {
      setParkedId(null);
    } else {
      setParkedId(id);
    }
  };

  return (
    <Layout>
      <div className={styles.header}>
        <h1>Parkings</h1>
        {isValidating && <Spinner />}
      </div>
      {isError && <ErrorMessage error={isError} />}
      {!isLoading && !isError
        && sortBy(parkings, 'fields.name').map(record => (
          <ParkingCard
            key={record.fields.id}
            parking={record.fields}
            parkedId={parkedId}
            toggleParkedId={toggleParkedId}
          />
        ))}

    </Layout>
  );
};

export default Overview;
