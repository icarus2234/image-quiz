'use client';

import { FC } from 'react';

import { Typography } from '@/modules/layout/typography';
import { useQuizStore } from '@/store';

import { ProgressBar } from '../progress-bar';
import styles from './header.module.css';

export const Header: FC = () => {
  const { headerProgress } = useQuizStore();

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <Typography variant="body2" className="mb-16">
          {headerProgress}%
        </Typography>
        <ProgressBar progress={headerProgress} />
      </div>
    </header>
  );
};
