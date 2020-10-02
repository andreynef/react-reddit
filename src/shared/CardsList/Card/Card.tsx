import React from 'react';
import styles from './card.css';
import {CardControls} from "./CardControls";
import {CardHeader} from "./CardHeader";
import {CardPreview} from "./CardPreview";

interface ICardProps {
  isSaved?: boolean;
  id?: string;
  bookmark:string;
  commentsAmount: number;
  openedThread:string;
}

export function Card({id, isSaved, commentsAmount, bookmark, openedThread}:ICardProps) {
  return (
    <li className={styles.card}>
      <CardHeader bookmark={bookmark} commentsAmount={commentsAmount}/>
      <CardPreview isSaved={isSaved} id={id}/>
      <CardControls commentsAmount={commentsAmount} bookmark={bookmark} openedThread={openedThread}/>
    </li>
  );
}
