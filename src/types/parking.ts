export type Parking = {
  availablecapacity: number;
  categorie: string;
  description: string;
  freeparking: number;
  id: string;
  isopennow: 0 | 1;
  lastupdate: string; // ISO
  location: [number, number];
  locationanddimension: string;
  name: string;
  occupancytrend: string;
  occupation: string;
  openingtimesdescription: string;
  operatorinformation: string;
  temporaryclosed: 0 | 1;
  totalcapacity: number;
  type: 'carPark';
  urllinkaddress: string;
};

export type ParkingRecord = {
  fields: Parking;
  recordid: string;
  geometry: {
    coordinates: [number, number];
  };
};
