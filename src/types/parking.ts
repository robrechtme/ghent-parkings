export type Parking = {
  name: string;
  address: string;
  id: number;
  availablecapacity: number;
  totalcapacity_test: number;
  newopeningtimes: string;
  contactinfo: string;
};

export type ParkingRecord = {
  fields: Parking;
};
