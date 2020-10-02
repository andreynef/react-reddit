import React from 'react';
import styles from './headerModal.css';
import {KarmaCounter} from "./KarmaCounter";
import {HeaderTextBlock} from "./HeaderTextBlock";

export function HeaderModal() {
  return (
    <div className={styles.container}>
      <KarmaCounter/>
      <HeaderTextBlock/>
    </div>
  );
}
