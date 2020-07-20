import React from 'react';
import styles from './Layout.module.css';
import { Link } from 'react-router-dom';
import { ReactComponent as Back } from '../../assets/back.svg';

type Props = {
  backButtonURL?: string;
  backButtonText?: string;
};

const Layout: React.FC<Props> = ({ children, backButtonURL, backButtonText = 'Back' }) => {
  return (
    <div className={styles.container}>
      {backButtonURL && (
        <Link to={backButtonURL} className={styles.backButton}>
          <span className={styles.backButtonIcon}>
            <Back />
          </span>
          {backButtonText}
        </Link>
      )}
      {children}
    </div>
  );
};

export default Layout;
