import React from 'react';
import styles from './cardlist.css';
import {Card} from "./Card";
import {EmptyCard} from "./EmptyCard";
import {FaceHmm} from "./FaceHmm";
import {GenericList} from "../../utils/react/GenericList";

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

  let allCards;

  if (list.length == 0) {
    allCards =
      <ul className={styles.cardList}>
        <EmptyCard/>
        <EmptyCard/>
        <EmptyCard/>
        <EmptyCard/>
        <FaceHmm/>
      </ul>

  } else {
    // allCards= <GenericList list={list} />;
    allCards = list.map((item, i) =>
        <Card
          key={item.id}
          item={item}
          bookmark={bookmark}
          openedThread={openedThread}
        />
    )
  }
  return (
    <ul className={styles.cardList}>
      {allCards}
    </ul>
  )
}
