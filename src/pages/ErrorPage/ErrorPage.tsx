import React from 'react';
import DocumentTitle from 'react-document-title';
import Layout from '../../components/Layout/Layout';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';

type Props = {
  title?: React.ReactNode;
  message?: React.ReactNode;
  details?: React.ReactNode;
};

const ErrorPage: React.FC<Props> = ({ title = 'Oops!', message, details }) => {
  return (
    <DocumentTitle title="Ghent Parkings">
      <Layout backButtonURL="/" backButtonText="Home">
        <h1>{title}</h1>
        <ErrorMessage message={message} details={details} />
      </Layout>
    </DocumentTitle>
  );
};

export default ErrorPage;
