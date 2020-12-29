import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Layout.module.css';
import { ReactComponent as Back } from '../../assets/back.svg';

type Props = {
  backButtonURL?: string;
  backButtonText?: string;
};

const Layout: React.FC<Props> = ({ children, backButtonURL, backButtonText = 'Back' }) => (
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

export default Layout;
