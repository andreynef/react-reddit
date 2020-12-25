import React from 'react';
import styles from './moderatordelete.css';

export function ModeratorDelete() {
  return (
    <div className={styles.container}>
      <span>+</span>
      Комментарий был скрыт модератором 4 часа назад
    </div>
  );
}
