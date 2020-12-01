import React from 'react';
import styles from './CardControls.css';
import {KarmaCounter} from "./KarmaCounter";
import {Actions} from "./Actions";
import {CommentsButton} from "./CommentsButton";

interface IControls {
  commentsAmount: number;
}

export function CardControls({commentsAmount}:IControls) {
  return (
    <div className={styles.controls}>
      <KarmaCounter/>
      <div className={styles.controlsCommentsContainer}>
        <CommentsButton commentsAmount={commentsAmount}/>
      </div>
      <Actions/>
    </div>
  );
}


