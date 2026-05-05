'use client';

import dynamic from 'next/dynamic';
import { useTranslations } from 'next-intl';
import ErrorMessage from '@/components/ErrorMessage/ErrorMessage';
import HeaderWithSpinner from '@/components/HeaderWithSpinner/HeaderWithSpinner';
import Layout from '@/components/Layout/Layout';
import useParkings from '@/hooks/useParkings';
import type { ParkingRecord } from '@/types/parking';
import ParkingCard from './ParkingCard';

const OverviewMap = dynamic(() => import('./OverviewMap'), { ssr: false });

type Props = {
  initialData: ParkingRecord[];
};

const OverviewView = ({ initialData }: Props) => {
  const { data: parkings, error, isValidating } = useParkings(undefined, { fallbackData: initialData });
  const t = useTranslations();

  return (
    <Layout>
      <HeaderWithSpinner loading={isValidating}>{t('title')}</HeaderWithSpinner>
      <p>
        {t.rich('description', {
          link: (chunks) => (
            <a
              href="https://data.stad.gent/explore/dataset/bezetting-parkeergarages-real-time/information/"
              target="_blank"
              rel="noreferrer"
            >
              {chunks}
            </a>
          ),
        })}
      </p>
      {error && <ErrorMessage details={error.toString()} />}
      {parkings && (
        <>
          <OverviewMap parkings={parkings} />
          {[...parkings]
            .sort((a, b) => a.fields.name.localeCompare(b.fields.name))
            .map((record) => (
              <ParkingCard key={record.fields.id} parking={record} />
            ))}
        </>
      )}
    </Layout>
  );
};

export default OverviewView;
