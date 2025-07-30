'use client';

import { ReactNode } from 'react';

import styles from './layout.module.css';

export default function Layout({ children }: { children: ReactNode }) {
  return <div className={styles.layoutContainer}>{children}</div>;
}
