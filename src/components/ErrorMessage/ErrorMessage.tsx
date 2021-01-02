import React from 'react';
import { useTranslation } from 'react-i18next';

type Props = {
  message?: React.ReactNode;
  details?: React.ReactNode;
};

const ErrorMessage: React.FC<Props> = ({
  message,
  details,
}) => {
  const { t } = useTranslation();
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
