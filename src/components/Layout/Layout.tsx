import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Layout.module.css';
import { ReactComponent as Back } from '../../assets/back.svg';
import { ReactComponent as GitHubIcon } from '../../assets/github.svg';

type Props = {
  backButtonURL?: string;
  backButtonText?: string;
};

const Layout: React.FC<Props> = ({ children, backButtonURL, backButtonText = 'Back' }) => (
  <>
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
    <footer className={styles.footer}>View on <a href="https://github.com/robrechtme/ghent-parkings" target="_blank" rel="noreferrer"><GitHubIcon className={styles.footerIcon} /> GitHub</a></footer>
  </>
);

export default Layout;
