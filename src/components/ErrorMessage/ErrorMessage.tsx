import React from 'react';

type Props = {
  error: Error;
};

const ErrorMessage: React.FC<Props> = ({ error }) => {
  return (
    <div>
      Something went wrong... Please try again by refreshing the page.
      <details>
        <summary>Details</summary>
        <p>{error.toString()}</p>
      </details>
    </div>
  );
};

export default ErrorMessage;
