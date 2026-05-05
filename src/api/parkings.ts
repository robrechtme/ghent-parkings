import type { ParkingRecord } from '../types/parking';

const API = process.env.NEXT_PUBLIC_API;

export const buildParkingsUrl = (id?: string): string => {
  if (!API) {
    throw new Error('NEXT_PUBLIC_API is not configured');
  }
  const params = new URLSearchParams({
    dataset: 'bezetting-parkeergarages-real-time',
    q: '',
    facet: 'description',
  });
  if (id) {
    params.set('refine.id', id);
  }
  return `${API}?${params.toString()}`;
};

type ApiResponse = { records: ParkingRecord[] };

export const fetchParkings = async (id?: string): Promise<ParkingRecord[]> => {
  const res = await fetch(buildParkingsUrl(id), { next: { revalidate: 60 } });
  if (!res.ok) {
    throw new Error(`Parkings API responded ${res.status}`);
  }
  const data = (await res.json()) as ApiResponse;
  return data.records;
};
