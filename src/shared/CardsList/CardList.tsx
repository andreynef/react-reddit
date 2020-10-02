import React from 'react';
import styles from './cardlist.css';
import {Card} from "./Card";
import {EmptyCard} from "./EmptyCard";
import {FaceHmm} from "./FaceHmm";

interface ICardListProps {
  openedThread: string;
  bookmark: string;
  list: {
    id: string,
    author: string,
    date: string,
    avatar: string,
    title: string,
    karma: string,
    commentsAmount: number,
    isSaved: boolean,
  }[];
}

export function CardList({bookmark, openedThread, list}:ICardListProps) {

  if (list.length == 0) {
    return (
      <ul className={styles.cardList}>
        <EmptyCard/>
        <EmptyCard/>
        <EmptyCard/>
        <EmptyCard/>
        <FaceHmm/>
      </ul>
    )
  } else {
    const allCards = list.map((item, i) => {
      return (
        <Card
          key={item.id}
          id={item.id}
          isSaved={item.isSaved}
          commentsAmount={item.commentsAmount}
          bookmark={bookmark}
          openedThread={openedThread}
        />
      )
    })
    return (
      <ul className={styles.cardList}>
        {allCards}
      </ul>
    )
  }
}
