import React from 'react';
import styles from './Card.module.css';

const Card = ({ children }) => {
  return (
    <div className={styles.card}>
      {children}
    </div>
  );
};

Card.Header = ({ children }) => {
  return <h3 className={styles.header}>{children}</h3>;
};

export default Card;
