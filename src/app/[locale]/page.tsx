import { setRequestLocale } from 'next-intl/server';
import { fetchParkings } from '@/api/parkings';
import OverviewView from './_components/OverviewView';

export const revalidate = 60;

type PageProps = {
  params: Promise<{ locale: string }>;
};

const HomePage = async ({ params }: PageProps) => {
  const { locale } = await params;
  setRequestLocale(locale);
  const parkings = await fetchParkings();
  return <OverviewView initialData={parkings} />;
};

export default HomePage;
