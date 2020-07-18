import React, { useState } from 'react';
import { ParkingCard } from '../components/ParkingCard/ParkingCard';
import useParkings from '../hooks/useParkings';
import Spinner from '../components/Spinner/Spinner';

const Overview = () => {
  const [parkedId, setParkedId] = useState(null);
  const { parkings, isLoading, isError } = useParkings();

  const toggleParkedId = (id) => {
    if (parkedId === id) {
      setParkedId(null);
    } else {
      setParkedId(id);
    }
  };

  return (
    <div className="Parkings">
      <h1>Parkings</h1>
      <div className="container">
        {isError && <span>Something went wrong.</span>}
        {isLoading && <Spinner />}
        {!isLoading && !isError && parkings.map(record => <ParkingCard record={record} parkedId={parkedId} toggleParkedId={toggleParkedId} />)}
      </div>
    </div>
  );
};

export default Overview;
