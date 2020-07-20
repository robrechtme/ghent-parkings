import React from 'react';
import Spinner from '../Spinner/Spinner';
import styles from './HeaderWithSpinner.module.css';

type Props = {
  loading: boolean;
};

const HeaderWithSpinner: React.FC<Props> = ({ loading, children }) => {
  return (
    <div className={styles.HeaderWithSpinner}>
      <h1>{children}</h1>
      {loading && <Spinner />}
    </div>
  );
};

export default HeaderWithSpinner;
