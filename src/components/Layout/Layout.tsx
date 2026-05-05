'use client';

import { useLocale, useTranslations } from 'next-intl';
import type { ChangeEvent, ReactNode } from 'react';
import { Link, usePathname, useRouter } from '@/i18n/navigation';
import { type Locale, localeNames, routing } from '@/i18n/routing';
import BackIcon from '@/icons/BackIcon';
import GitHubIcon from '@/icons/GitHubIcon';
import GlobeIcon from '@/icons/GlobeIcon';
import styles from './Layout.module.css';

type Props = {
  children: ReactNode;
  backButtonURL?: string;
  backButtonText?: string;
};

const Layout = ({ children, backButtonURL, backButtonText }: Props) => {
  const t = useTranslations();
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const handleLocaleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    router.replace(pathname, { locale: event.target.value as Locale });
  };

  return (
    <>
      <div className={styles.container}>
        {backButtonURL ? (
          <Link href={backButtonURL} className={styles.backButton}>
            <span className={styles.backButtonIcon}>
              <BackIcon />
            </span>
            {backButtonText || t('back')}
          </Link>
        ) : (
          <div className={styles.backbuttonFiller} />
        )}
        {children}
      </div>
      <footer className={styles.footer}>
        <div>
          {t('footer')}{' '}
          <a href="https://github.com/robrechtme/ghent-parkings" target="_blank" rel="noreferrer">
            <GitHubIcon className={styles.footerIcon} /> GitHub
          </a>
        </div>
        <div className={styles.localePicker}>
          <GlobeIcon className={styles.footerGlobe} aria-hidden="true" />
          <select
            aria-label="Language"
            value={locale}
            onChange={handleLocaleChange}
            className={styles.localeSelect}
          >
            {routing.locales.map((l) => (
              <option key={l} value={l}>
                {localeNames[l]}
              </option>
            ))}
          </select>
        </div>
      </footer>
    </>
  );
};

export default Layout;
