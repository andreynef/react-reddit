import React from 'react';
import styles from './exitbuttonmodal.css';
import {CrossIcon} from "../../../Icons";

export function ExitButtonModal() {
  return (
    <button className={styles.container}>
      <CrossIcon/>
    </button>
  );
}
