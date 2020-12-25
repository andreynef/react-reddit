import React from 'react';
import styles from './metadata.css';
import {Break} from "../../../../supportingComponents/Break";

interface ICardMetaProps {
  author?: string,
  created?: string,
  avatar?:string,
}

export function MetaData({author, created, avatar}:ICardMetaProps) {
  return (
    <div className={styles.metaData}>
      <div className={styles.userLink}>
        <img
          className={styles.avatar}
          src={avatar}
          alt="avatar"
        />
        <a href={`http://reddit.com/user/${author}`} className={styles.userName} target="_blank" rel="noopener noreferrer">{author} </a>
      </div>
      <span className={styles.createdAt}>
            <span className={styles.publishedLabel}>
              опубликовано
            </span>
        <Break size={12}/>
        {created}
      </span>
    </div>
  );
}
