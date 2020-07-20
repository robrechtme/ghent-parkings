import React from 'react';
import DocumentTitle from 'react-document-title';
import Layout from '../../components/Layout/Layout';

type Props = {
  message?: string | React.ReactElement;
};

const ErrorPage: React.FC<Props> = ({ message }) => {
  return (
    <DocumentTitle title="Ghent Parkings">
      <Layout backButtonURL="/" backButtonText="Home">
        <h1>Oops!</h1>
        <p>{message}</p>
      </Layout>
    </DocumentTitle>
  );
};

export default ErrorPage;
