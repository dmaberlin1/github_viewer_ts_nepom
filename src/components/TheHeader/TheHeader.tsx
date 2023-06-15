import React from 'react';
import styles from './TheHeader.module.scss';
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";


const TheHeader = () => (
  <div className={styles.header}>
    <div className={styles.logo}>
      devfinder
    </div>
    <ThemeSwitcher></ThemeSwitcher>
  </div>
);

export default TheHeader;
