import React from 'react';
import styles from './card.css';
import {CardControls} from "./CardControls";
import {CardHeader} from "./CardHeader";
import {CardPreview} from "./CardPreview";

interface ICardProps {
  item: {
    id: string,
    author: string,
    date: string,
    avatar: string,
    title: string,
    karma: string,
    commentsAmount: number,
    isSaved: boolean,
  }
  bookmark:string;
  openedThread:string;
}

export function Card({item, bookmark, openedThread}:ICardProps) {
  return (
    <li className={styles.card}>
      <CardHeader bookmark={bookmark} commentsAmount={item.commentsAmount} title={item.title} date={item.date} author={item.author} id={item.id}/>
      <CardPreview isSaved={item.isSaved} id={item.id}/>
      <CardControls commentsAmount={item.commentsAmount} bookmark={bookmark} openedThread={openedThread}/>
    </li>
  );
}
