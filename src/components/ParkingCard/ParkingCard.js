import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ParkingCard.module.css';
import Card from '../Card/Card';
import ParkingCounter from '../ParkingCounter/ParkingCounter';

const ParkingCard = ({ parking, parkedId, toggleParkedId }) => {
  return (
    <Card className={styles.ParkingCard}>
      {parkedId === parking.id && <Card.Label>You parked here</Card.Label>}
      <Card.Content>
        <Card.Header className={styles.header}>
          {parking.name}
        </Card.Header>
        <p>{parking.address}</p>
        <div>
          <Link to={`/${parking.id}`}>Details</Link>
        </div>
        <button className={styles.parkButton} type="button" onClick={() => toggleParkedId(parking.id)}>Park</button>
      </Card.Content>
      <Card.Aside className={styles.capacity}>
        <ParkingCounter available={parkedId === parking.id ? parking.availablecapacity - 1 : parking.availablecapacity} total={parking.totalcapacity_test} />
      </Card.Aside>
    </Card>
  );
};

export default ParkingCard;
