import React, { useState, useEffect } from 'react';
import { ParkingCard } from '../components/ParkingCard';
import { fetchData } from '../api/parking';

const Overview = () => {
  const [data, setData] = useState([]);
  const [parkedId, setParkedId] = useState(null);

  useEffect(() => {
    fetchData()
      .then(response => setData(response.records));
  }, []);

  const toggleParkedId = (id) => {
    if (parkedId === id) {
      setParkedId(null);
    } else {
      setParkedId(id);
    }
  };

  return (
    <div className="App">
      {data.map(record => <ParkingCard record={record} parkedId={parkedId} toggleParkedId={toggleParkedId} />)}
    </div>
  );
};

export default Overview;
