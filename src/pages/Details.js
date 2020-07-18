import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchData } from '../api/parking';
import { ParkingCard } from '../components/ParkingCard';

const Details = ({ match }) => {
  const { id } = match.params;
  const [data, setData] = useState();

  useEffect(() => {
    fetchData(id)
      .then(response => setData(response.records[0]));
  }, [id]);

  return (
    <div>
      <Link to="/">&lt; Back</Link>
      <h1>Details</h1>
      {data && <ParkingCard record={data} />}
    </div>
  );
};

export default Details;
