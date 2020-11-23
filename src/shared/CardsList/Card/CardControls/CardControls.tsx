import React from 'react';
import styles from './CardControls.css';
import {KarmaCounter} from "./KarmaCounter";
import {Actions} from "./Actions";
import {CommentsButton} from "./CommentsButton";

interface IControls {
  bookmark:string;
  commentsAmount: number;
  openedThread:string;
}

export function CardControls({bookmark, commentsAmount, openedThread}:IControls) {
  return (
    <div className={styles.controls}>
      <KarmaCounter/>
      <div className={styles.controlsCommentsContainer}>
        <CommentsButton bookmark={bookmark} commentsAmount={commentsAmount}/>
      </div>
      <Actions openedThread={openedThread} bookmark={bookmark}/>
    </div>
  );
}


