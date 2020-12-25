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
          src="https://c7.uihere.com/files/54/214/491/rick-sanchez-morty-smith-rick-and-morty-season-1-adult-swim-rick-and-morty.jpg"
          alt="avatar"
        />
        <span className={styles.name}>{name}</span>
      </div>
      <span className={styles.theme}>{theme}</span>
    </div>
  );
}


