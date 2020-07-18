import React from 'react';
import cx from 'classnames';
import styles from './Card.module.css';

const Card = ({ children, className }) => {
  return (
    <div className={cx(styles.card, className)}>
      {children}
    </div>
  );
};

Card.Header = ({ children }) => {
  return <h3 className={styles.header}>{children}</h3>;
};
Card.Content = ({ children }) => {
  return <div className={styles.content}>{children}</div>;
};
Card.Aside = ({ children }) => {
  return <div className={styles.aside}>{children}</div>;
};
Card.Label = ({ children }) => {
  return <div className={styles.label}>{children}</div>;
};

export default Card;
