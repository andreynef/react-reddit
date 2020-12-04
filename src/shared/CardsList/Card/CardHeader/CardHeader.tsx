import React from 'react';
import styles from './CardHeader.css';
import {MetaData} from "./MetaData";
import {ActionsContent} from "./ActionsContent";
import {Menu} from "./Menu";
import {Title} from "./Title";

interface ITextContentProps {
  commentsAmount:number;
  title:string;
  author: string,
  date: string,
}

export function CardHeader({commentsAmount, title, date, author}:ITextContentProps) {


  return (
    <div className={styles.cardHeaderContainer}>
      <div className={styles.metaMenuContainer}>
        <MetaData date={date} author={author}/>
        <Menu/>
      </div>
      <Title title={title}/>
      <ActionsContent commentsAmount={commentsAmount}/>
    </div>
  );
}
