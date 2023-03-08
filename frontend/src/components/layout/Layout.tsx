import React from 'react'
import { ReactNode } from 'react';

import styles from '@/styles/Layout.module.css';
import { Navbar } from '../navbar/Navbar';
import { Footer } from '../footer/Footer';

type LayoutProps = {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.appContainer}>
      <Navbar />
      <main id="content" className={styles.content}>
        {children}
      </main>
      <Footer />
    </div>
  )
}
