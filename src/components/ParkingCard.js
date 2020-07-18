import React from 'react';
import { Link } from 'react-router-dom';

export const ParkingCard = ({ record, parkedId, toggleParkedId }) => {
  return (
    <div key={record.recordid}>
      <div>
        {parkedId === record.recordid ? <strong>{record.fields.name}</strong> : record.fields.name}
      </div>
      <div>{record.fields.address}</div>
      <div>{parkedId === record.recordid ? record.fields.availablecapacity - 1 : record.fields.availablecapacity} / {record.fields.totalcapacity}</div>
      <Link to={`/${record.recordid}`}>Details</Link>
      <button type="button" onClick={() => toggleParkedId(record.recordid)}>Park</button>
    </div>
  );
};
