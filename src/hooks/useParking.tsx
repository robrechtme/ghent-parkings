import useSWR from 'swr';
import fetcher from '../api/fetcher';
import { DataLoader } from '../types/dataLoader';
import { ParkingRecord } from '../types/parking';

const useParking = (id: string): DataLoader<ParkingRecord> => {
  const { data, error, isValidating } = useSWR(
    `${process.env.REACT_APP_API}&q=&facet=description&refine.id=${id}`,
    fetcher,
  );
  return {
    data: data && data.records[0],
    isLoading: !error && !data,
    isValidating,
    error,
  };
};

export default useParking;
