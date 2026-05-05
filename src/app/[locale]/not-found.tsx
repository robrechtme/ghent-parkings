'use client';

import { useTranslations } from 'next-intl';
import ErrorMessage from '@/components/ErrorMessage/ErrorMessage';
import Layout from '@/components/Layout/Layout';

const NotFound = () => {
  const t = useTranslations();

  return (
    <Layout backButtonURL="/" backButtonText="Home">
      <h1>{t('errorPage.title')}</h1>
      <ErrorMessage message={t('notFound.title')} />
    </Layout>
  );
};

export default NotFound;
