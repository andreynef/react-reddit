import React from 'react';
import styles from './threadtitle.css';

export function ThreadTitle() {

  const openedThread = 'private';

  return (
    <div className={styles.threadContainer}>
      <div className={styles.titleContainer}>
          <h1 className={styles.threadTitle}>
            {openedThread === 'private'?'Личный кабинет':'Дискуссии'}
          </h1>
      </div>
    </div>
  );
}
