import React from 'react';
import { ReactComponent as Puff } from '../../assets/puff.svg';
import styles from './Spinner.module.css';

const Spinner = () => {
  return (
    <div className={styles.Spinner}>
      <Puff />
    </div>
  );
};

export default Spinner;
