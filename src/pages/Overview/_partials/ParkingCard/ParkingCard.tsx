import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ParkingCard.module.css';
import Card from '../../../../components/Card/Card';
import ParkingCounter from '../../../../components/ParkingCounter/ParkingCounter';
import { Parking } from '../../../../types/parking';

type Props = {
  parking: Parking;
};

const ParkingCard: React.FC<Props> = ({ parking }) => {
  return (
    <Card className={styles.ParkingCard}>
      <Card.Content>
        <Card.ContentHeader className={styles.header}>{parking.name}</Card.ContentHeader>
        <p>{parking.address}</p>
        <div>
          <Link to={`/p/${parking.id}`}>Details</Link>
        </div>
      </Card.Content>
      <Card.Aside className={styles.capacity}>
        <ParkingCounter available={parking.availablecapacity} total={parking.totalcapacity_test} />
      </Card.Aside>
    </Card>
  );
};

export default ParkingCard;
