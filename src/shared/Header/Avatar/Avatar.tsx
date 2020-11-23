import React from 'react';
import styles from './avatar.css';

export function Avatar() {
  return (
    <div className={styles.avatar}>
      <div className={styles.avatarNimbus}/>
        <img
          className={styles.avatarImg}
          src="https://copypast.ru/fotografii/foto_zhivotnih/jivotnye_v_obraze_znamenitostej_0_/jivotnye_v_obraze_znamenitostej_0_027.jpg"
          alt="avatar"
        />
      <span className={styles.avatarText}>Константин</span>
    </div>
  );
}
