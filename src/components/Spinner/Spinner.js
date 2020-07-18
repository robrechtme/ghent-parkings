import React from 'react';
import { ReactComponent as SVG } from '../../assets/tail-spin.svg';
import styles from './Spinner.module.css';

const Spinner = () => {
  return (
    <div className={styles.Spinner}>
      <SVG />
    </div>
  );
};

export default Spinner;
