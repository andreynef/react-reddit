import React from 'react';
import styles from './metadata.css';

interface ICardMetaProps {
  author?: string,
  date?: string,
}

export function MetaData({author, date}:ICardMetaProps) {

  return (
    <div className={styles.metaData}>
      <div className={styles.userLink}>
        <img
          className={styles.avatar}
          src="https://copypast.ru/fotografii/foto_zhivotnih/jivotnye_v_obraze_znamenitostej_0_/jivotnye_v_obraze_znamenitostej_0_027.jpg"
          alt="avatar"
        />
        <a href="#user-url" className={styles.userName}>{author}</a>
      </div>
      <span className={styles.createdAt}>
            <span className={styles.publishedLabel}>
              опубликовано
            </span>
        {date}
      </span>
    </div>
  );
}
