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
    karma: number,
    commentsAmount: number,
    isSaved: boolean,
  }
}

export function Card({item}:ICardProps) {
  return (
      <div className={styles.card}>
        <CardHeader commentsAmount={item.commentsAmount} title={item.title} date={item.date} author={item.author}/>
        <CardPreview isSaved={item.isSaved} id={item.id}/>
        <CardControls commentsAmount={item.commentsAmount}/>
      </div>
  );
}
