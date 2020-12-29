import React from 'react';
import { ReactComponent as SVG } from '../../assets/tail-spin.svg';
import styles from './Spinner.module.css';

const Spinner: React.FC = () => (
  <div className={styles.Spinner}>
    <SVG />
  </div>
);

export default Spinner;
