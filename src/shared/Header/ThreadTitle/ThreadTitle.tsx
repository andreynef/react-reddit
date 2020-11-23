import React from 'react';
import styles from './threadtitle.css';
import {SortBlock} from "../../SortBlock";

interface IThreadTitle {
  openedThread: string;
}

export function ThreadTitle({openedThread}:IThreadTitle) {
  return (
    <>
      {openedThread === 'private' &&//либо.
        <h1 className={styles.threadTitle}>
          Личный кабинет
        </h1>
      }
      {openedThread === 'discussion' &&//либо
        <>
          <h1 className={styles.threadTitle}>
            Дискуссии
          </h1>
        </>
      }
    </>
  );
}
