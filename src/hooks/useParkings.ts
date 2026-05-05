'use client';

import useSWR from 'swr';
import { buildParkingsUrl } from '../api/parkings';
import type { ParkingRecord } from '../types/parking';

const fetcher = async (url: string): Promise<ParkingRecord[]> => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Parkings API responded ${res.status}`);
  }
  const data = (await res.json()) as { records: ParkingRecord[] };
  return data.records;
};

type Options = {
  fallbackData?: ParkingRecord[];
};

const useParkings = (id?: string, { fallbackData }: Options = {}) => {
  const { data, error, isLoading, isValidating } = useSWR<ParkingRecord[], Error>(
    buildParkingsUrl(id),
    fetcher,
    {
      refreshInterval: 5 * 60 * 1000,
      focusThrottleInterval: 5 * 60 * 1000,
      fallbackData,
    },
  );

  return { data, isLoading, isValidating, error };
};

export default useParkings;
