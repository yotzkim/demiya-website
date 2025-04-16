import React from 'react';
import Link from 'next/link';
import styles from '../../src/styles/layout.module.css';
import Navbar from './navbar';

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
        <Navbar/>
      {children}
      <footer className={styles.footer}>
        <p className={styles.copyright}>
          &copy; Copyright 2016-2025 Demiya Inc.
        </p>
      </footer>
    </div>
  );
};

export default Layout;


