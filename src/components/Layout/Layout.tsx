import React from 'react';
import styles from './Layout.module.css';

type LayoutProps = {
  children?: React.ReactNode;
};

const Layout: React.FC = ({ children }: LayoutProps) => {
  return <div className={styles.container}>{children}</div>;
};

export default Layout;
