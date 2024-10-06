"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../../src/styles/navbar.module.css';

const navLinks = [
  { title: 'Home', path: '/' },
  { title: 'Orders / Locations', path: '/order' },
  { title: 'Hours', path: '/hours' },
];

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Image src='/images/logo.png' alt='logo' width={70} height={60} />
      </div>
      <ul className={styles.navLinks}>
        {navLinks.map((link, index) => (
          <li key={index}>
            <Link href={link.path}>
              <div className={styles.navTitles}>{link.title}</div>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;

