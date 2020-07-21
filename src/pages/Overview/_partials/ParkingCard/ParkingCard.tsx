import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ParkingCard.module.css';
import Card from '../../../../components/Card/Card';
import ParkingCounter from '../../../../components/ParkingCounter/ParkingCounter';
import { Parking } from '../../../../types/parking';

type Props = {
  parking: Parking;
  parkedId?: number;
  toggleParkedId(id: number): void;
};

const ParkingCard: React.FC<Props> = ({ parking, parkedId, toggleParkedId }) => {
  return (
    <Card className={styles.ParkingCard}>
      {parkedId === parking.id && <Card.Label>You parked here</Card.Label>}
      <Card.Content>
        <Card.ContentHeader className={styles.header}>{parking.name}</Card.ContentHeader>
        <p>{parking.address}</p>
        <div>
          <Link to={`/p/${parking.id}`}>Details</Link>
        </div>
        <button className={styles.parkButton} type="button" onClick={() => toggleParkedId(parking.id)}>
          {parkedId === parking.id ? 'Clear' : 'Park'}
        </button>
      </Card.Content>
      <Card.Aside className={styles.capacity}>
        <ParkingCounter
          available={parkedId === parking.id ? parking.availablecapacity - 1 : parking.availablecapacity}
          total={parking.totalcapacity_test}
        />
      </Card.Aside>
    </Card>
  );
};

export default ParkingCard;
