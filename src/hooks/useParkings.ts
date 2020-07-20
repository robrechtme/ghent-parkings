import useSWR from 'swr';
import fetcher from '../api/fetcher';
import { DataLoader } from '../types/dataLoader';
import { ParkingRecord } from '../types/parking';

const useParkings = (id?: string): DataLoader<ParkingRecord[]> => {
  let endpoint = `${process.env.REACT_APP_API}/?dataset=bezetting-parkeergarages-real-time&q=&facet=description`;
  if (id) {
    endpoint += `&refine.id=${id}`;
  }

  const { data, error, isValidating } = useSWR(endpoint, fetcher, {
    refreshInterval: 5 * 60 * 1000, // Poll every 5 mins.
    focusThrottleInterval: 5 * 60 * 1000, // Only revalidate after 5 mins.
  });

  return {
    data: data && data.records,
    isLoading: !error && !data,
    isValidating,
    error,
  };
};

export default useParkings;
