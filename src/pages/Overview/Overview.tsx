import React, { useState, ReactElement } from 'react';
import { sortBy } from 'lodash-es';
import ParkingCard from './_partials/ParkingCard/ParkingCard';
import useParkings from '../../hooks/useParkings';
import Spinner from '../../components/Spinner/Spinner';
import styles from './Overview.module.css';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import Layout from '../../components/Layout/Layout';
import DocumentTitle from 'react-document-title';

const Overview: React.FC = (): ReactElement => {
  const [parkedId, setParkedId] = useState<number | undefined>();
  const { data: parkings, isLoading, error, isValidating } = useParkings();

  const toggleParkedId = (id: number | undefined) => {
    if (parkedId === id) {
      setParkedId(undefined);
    } else {
      setParkedId(id);
    }
  };

  return (
    <DocumentTitle title="Ghent Parkings">
      <Layout>
        <div className={styles.header}>
          <h1>Parkings</h1>
          {isValidating && <Spinner />}
        </div>
        {error && <ErrorMessage error={error} />}
        {!isLoading &&
          !error &&
          sortBy(parkings, 'fields.name').map((record) => (
            <ParkingCard
              key={record.fields.id}
              parking={record.fields}
              parkedId={parkedId}
              toggleParkedId={toggleParkedId}
            />
          ))}
      </Layout>
    </DocumentTitle>
  );
};

export default Overview;
