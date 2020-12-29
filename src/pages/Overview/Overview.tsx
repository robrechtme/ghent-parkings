import React from 'react';
import { sortBy } from 'lodash-es';
import DocumentTitle from 'react-document-title';
import { RouteComponentProps } from 'react-router-dom';
import ParkingCard from './_partials/ParkingCard/ParkingCard';
import useParkings from '../../hooks/useParkings';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import Layout from '../../components/Layout/Layout';
import HeaderWithSpinner from '../../components/HeaderWithSpinner/HeaderWithSpinner';

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
          && sortBy(parkings, 'fields.name').map((record) => (
            <ParkingCard key={record.fields.id} parking={record.fields} />
          ))}
      </Layout>
    </DocumentTitle>
  );
};

export default Overview;
