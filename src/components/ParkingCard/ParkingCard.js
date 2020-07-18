import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ParkingCard.module.css';

export const ParkingCard = ({ record, parkedId, toggleParkedId }) => {
  const ratio = record.fields.availablecapacity / record.fields.totalcapacity;
  let className;
  if (ratio > 0.5) {
    className = styles.green;
  } else if (ratio > 0.1) {
    className = styles.orange;
  } else {
    className = styles.red;
  }
  return (
    <div className={styles.card} key={record.fields.id}>
      <div>
        <h3 className={styles.header}>
          {parkedId === record.fields.id && 'X'} {record.fields.name}
        </h3>
        <div>{record.fields.address}</div>
        <div>
          <Link to={`/${record.fields.id}`}>Details</Link>
        </div>
        <button className={styles.parkButton} type="button" onClick={() => toggleParkedId(record.recordid)}>Park</button>
      </div>
      <div className={styles.capacity}>
        <span className={className}>{parkedId === record.fields.id ? record.fields.availablecapacity - 1 : record.fields.availablecapacity}</span> / {record.fields.totalcapacity}
      </div>
    </div>
  );
};
