import React from 'react';
import Link from 'next/link';
import styles from '../../src/styles/layout.module.css';

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.tabs}>
        <Link href="/" className={styles.a}>Home</Link>
        <Link href="/order" className={styles.a}>Online Order/Locations</Link>
        <Link href="/hours" className={styles.a}>Business Hours</Link>
      </div>
      {children}
      <footer className={styles.footer}>
        <p className={styles.copyright}>
          &copy; Copyright 2016-2023 Demiya Inc.
        </p>
      </footer>
    </div>
  );
};

export default Layout;
