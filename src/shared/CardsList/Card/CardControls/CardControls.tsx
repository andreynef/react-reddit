import React from 'react';
import styles from './CardControls.css';
import {KarmaCounter} from "./KarmaCounter";
import {Actions} from "./Actions";
import {CommentsButton} from "./CommentsButton";

interface ICardControlsProps {
  commentsAmount: number;
  score?:number;
}

export function CardControls({commentsAmount, score}:ICardControlsProps) {
  return (
    <div className={styles.controls}>
      <KarmaCounter score={score}/>
      <div className={styles.controlsCommentsContainer}>
        <CommentsButton commentsAmount={commentsAmount}/>
      </div>
      <Actions/>
    </div>
  );
}


