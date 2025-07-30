import { FC, ReactNode } from 'react';

import styles from './main-container.module.css';

export interface MainContainerProps {
  children: ReactNode;
}

export const MainContainer: FC<MainContainerProps> = ({ children }) => {
  return <main className={styles.mainContainer}>{children}</main>;
};
