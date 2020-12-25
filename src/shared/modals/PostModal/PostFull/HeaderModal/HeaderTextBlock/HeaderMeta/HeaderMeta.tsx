import React from 'react';
import styles from './headermeta.css';
import {useSelector} from "react-redux";
import {IInitialState} from "../../../../../../../Store/initialState";
import {IPost} from "../../../../../../../Store/Posts/postsActions";

interface IHeaderMeta {
  avatar: string;
  subreddit: string;
  name:string;
  created:string;
}

export function HeaderMeta({avatar, subreddit, name, created}:IHeaderMeta) {

  return (
    <div className={styles.headerMetaContainer}>
      <span className={styles.publishedAgoText}>
        опубликовано {created}
      </span>
      <div className={styles.nameContainer}>
        <img
          className={styles.avatarImg}
          src={avatar || "https://c7.uihere.com/files/54/214/491/rick-sanchez-morty-smith-rick-and-morty-season-1-adult-swim-rick-and-morty.jpg"}
          alt="avatar"
        />
        <span className={styles.name}>{name}</span>
      </div>
      <span className={styles.theme}>{subreddit}</span>
    </div>
  );
}


