import React from 'react';

type Props = {
  message?: React.ReactNode;
  details?: React.ReactNode;
};

const ErrorMessage: React.FC<Props> = ({
  message = 'Something went wrong... Please try again by refreshing the page.',
  details,
}) => {
  return (
    <div>
      <p>{message}</p>
      {details && (
        <details>
          <summary>Details</summary>
          <p>{details}</p>
        </details>
      )}
    </div>
  );
};

export default ErrorMessage;
