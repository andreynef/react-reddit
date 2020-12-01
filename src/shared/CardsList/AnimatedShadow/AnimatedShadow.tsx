import React from 'react';
import styles from './animatedShadow.css';


export function AnimatedShadow() {
  return (
    <div className={styles.shadowContainer}>
      <div className={styles.shadow}/>
    </div>
  );
}
