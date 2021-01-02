import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styles from './Layout.module.css';
import { ReactComponent as Back } from '../../assets/back.svg';
import { ReactComponent as GitHubIcon } from '../../assets/github.svg';
import { ReactComponent as GlobeIcon } from '../../assets/globe.svg';

type Props = {
  backButtonURL?: string;
  backButtonText?: string;
};

const Layout: React.FC<Props> = ({ children, backButtonURL, backButtonText }) => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <div className={styles.container}>
        {backButtonURL ? (
          <Link to={backButtonURL} className={styles.backButton}>
            <span className={styles.backButtonIcon}>
              <Back />
            </span>
            {backButtonText || t('back')}
          </Link>
        ) : <div className={styles.backbuttonFiller} />}
        {children}
      </div>
      <footer className={styles.footer}>
        <div>{t('footer')} <a href="https://github.com/robrechtme/ghent-parkings" target="_blank" rel="noreferrer"><GitHubIcon className={styles.footerIcon} /> GitHub</a></div>
        <button type="button" className={styles.footerLang} onClick={() => i18n.changeLanguage(i18n.language === 'nl' ? 'en' : 'nl')}>
          <GlobeIcon className={styles.footerGlobe} /> {t('switchLang')}
        </button>
      </footer>
    </>
  );
};

export default Layout;
