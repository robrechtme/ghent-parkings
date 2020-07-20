import React, { useState } from 'react';
import { sortBy } from 'lodash-es';
import ParkingCard from './_partials/ParkingCard/ParkingCard';
import useParkings from '../../hooks/useParkings';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import Layout from '../../components/Layout/Layout';
import DocumentTitle from 'react-document-title';
import HeaderWithSpinner from '../../components/HeaderWithSpinner/HeaderWithSpinner';
import { RouteComponentProps } from 'react-router-dom';

const Overview: React.FC<RouteComponentProps> = () => {
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
        <HeaderWithSpinner loading={isValidating}>Parkings</HeaderWithSpinner>
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
