import React from 'react';
import styles from './headermeta.css';

interface IHeaderMeta {
  name: string;
  theme: string;
  isComment?: boolean;
  commentedOn?:string;
}

export function HeaderMeta({name, theme, isComment=false, commentedOn='7 часов назад'}:IHeaderMeta) {
  return (
    <div className={styles.headerMetaContainer}>
      <span className={styles.publishedAgoText}>
        {!isComment && ('опубликовано')} {commentedOn}
      </span>
      <div className={styles.nameContainer}>
        <img
          className={styles.avatarImg}
          src="https://storage.myseldon.com/news_pict_7C/7C414D87E35B9F89A26DA540F4A1D07F"
          alt="avatar"
        />
        <span className={styles.name}>{name}</span>
      </div>
      <span className={styles.theme}>{theme}</span>
    </div>
  );
}


