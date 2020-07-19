import useSWR from 'swr';
import fetcher from '../api/fetcher';
import { DataLoader } from '../types/dataLoader';
import { ParkingRecord } from '../types/parking';

const useParkings = (): DataLoader<ParkingRecord[]> => {
  const { data, error, isValidating } = useSWR(`${process.env.REACT_APP_API}&q=&facet=description`, fetcher);
  return {
    data: data && data.records,
    isLoading: !error && !data,
    isValidating,
    error,
  };
};

export default useParkings;
