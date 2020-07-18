import React from 'react';
import styles from './ErrorMessage.module.css';

const ErrorMessage = ({ error }) => {
  return (
    <div className={styles.ErrorMessage}>Something went wrong... Please try again by refreshing the page.
      <details>
        <summary>Details</summary>
        <p>{error.toString()}</p>
      </details>
    </div>
  );
};

export default ErrorMessage;
