import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { fetchParkings } from '@/api/parkings';
import DetailsView from './_components/DetailsView';

export const revalidate = 60;

type PageProps = {
  params: Promise<{ locale: string; id: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, id: encodedId } = await params;
  const id = decodeURIComponent(encodedId);
  const t = await getTranslations({ locale });
  const parkings = await fetchParkings(id);
  const parking = parkings[0];
  return {
    title: parking ? `${parking.fields.name} | ${t('title')}` : t('title'),
  };
}

const DetailsPage = async ({ params }: PageProps) => {
  const { locale, id: encodedId } = await params;
  setRequestLocale(locale);
  const id = decodeURIComponent(encodedId);
  const parkings = await fetchParkings(id);
  return <DetailsView id={id} initialData={parkings} />;
};

export default DetailsPage;
