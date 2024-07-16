import React from 'react';
import Link from 'next/link';
import styles from '../../src/styles/layout.module.css';

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
        <p className={styles.newLocation}> Fremont Location Coming soon!</p>
        <p className={styles.dublin}>Dublin location now open on Wednesdays!</p>
      <div className={styles.tabs}>
        <Link href="/" className={styles.a}>Home</Link>
        <Link href="/order" className={styles.a}>Online Order/Locations</Link>
        <Link href="/hours" className={styles.a}>Business Hours</Link>
      </div>
      {children}
      <footer className={styles.footer}>
        <p className={styles.copyright}>
          &copy; Copyright 2016-2024 Demiya Inc.
        </p>
      </footer>
    </div>
  );
};

export default Layout;
