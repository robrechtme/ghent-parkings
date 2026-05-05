'use client';

import { useTranslations } from 'next-intl';
import type { ReactNode } from 'react';

type Props = {
  message?: ReactNode;
  details?: ReactNode;
};

const ErrorMessage = ({ message, details }: Props) => {
  const t = useTranslations();
  return (
    <div>
      <p>{message || t('errorMessage')}</p>
      {details && (
        <details>
          <summary>{t('details')}</summary>
          <p>{details}</p>
        </details>
      )}
    </div>
  );
};

export default ErrorMessage;
