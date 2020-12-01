import React from 'react';
import styles from './CardHeader.css';
import {MetaData} from "./MetaData";
import {ActionsContent} from "./ActionsContent";
import {Menu} from "./Menu";
import {NotStandardLink} from "../../../../utils/react/NotStandardLink";

interface ITextContentProps {
  commentsAmount:number;
  title:string;
  author: string,
  date: string,
}

export function CardHeader({commentsAmount, title, date, author}:ITextContentProps) {

  const handleClick = ()=>{
    alert('title is pressed. Used NotStandardLink, which is - preventDefault(stopPropagation(props.onClick)')
  }

  return (
    <div className={styles.cardHeaderContainer}>
      <div className={styles.metaMenuContainer}>
        <MetaData date={date} author={author}/>
        <Menu/>
      </div>
      <h2 className={styles.titleContainer}>
        <NotStandardLink href={"#post-url"} text={title} onClick={handleClick}/>
      </h2>
      <ActionsContent commentsAmount={commentsAmount}/>
    </div>
  );
}
