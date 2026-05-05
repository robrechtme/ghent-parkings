import type { ReactNode } from 'react';
import Spinner from '../Spinner/Spinner';
import styles from './HeaderWithSpinner.module.css';

type Props = {
  loading: boolean;
  children: ReactNode;
};

const HeaderWithSpinner = ({ loading, children }: Props) => (
  <div className={styles.HeaderWithSpinner}>
    <h1>{children}</h1>
    {loading && <Spinner />}
  </div>
);

export default HeaderWithSpinner;
