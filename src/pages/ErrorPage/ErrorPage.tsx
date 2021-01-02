import React from 'react';
import DocumentTitle from 'react-document-title';
import { useTranslation } from 'react-i18next';
import Layout from '../../components/Layout/Layout';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';

type Props = {
  title?: React.ReactNode;
  message?: React.ReactNode;
  details?: React.ReactNode;
};

const ErrorPage: React.FC<Props> = ({ title, message, details }) => {
  const { t } = useTranslation();
  return (
    <DocumentTitle title={t('title')}>
      <Layout backButtonURL="/" backButtonText="Home">
        <h1>{title || t('errorPage.title')}</h1>
        <ErrorMessage message={message} details={details} />
      </Layout>
    </DocumentTitle>
  );
};

export default ErrorPage;
