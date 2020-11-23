import React from 'react';
import styles from './CardHeader.css';
import {MetaData} from "./MetaData";
import {ActionsContent} from "./ActionsContent";
import {Menu} from "./Menu";
import {NotStandardLink} from "../../../../utils/react/NotStandardLink";

interface ITextContentProps {
  bookmark: string,
  commentsAmount:number;
  title:string;
  author: string,
  date: string,
  id:string,
}

export function CardHeader({bookmark, commentsAmount, title, date, author, id}:ITextContentProps) {

  const handleClick = ()=>{
    alert('title is pressed. Used NotStandardLink, which is - preventDefault(stopPropagation(props.onClick)')
  }

  return (
    <div className={styles.cardHeaderContainer}>
      <div className={styles.metaMenuContainer}>
        <MetaData date={date} author={author}/>
        <Menu id={id}/>
      </div>
      <h2 className={styles.titleContainer}>
        <NotStandardLink href={"#post-url"} text={title} onClick={handleClick}/>
      </h2>
      <ActionsContent bookmark={bookmark} commentsAmount={commentsAmount}/>
    </div>
  );
}
