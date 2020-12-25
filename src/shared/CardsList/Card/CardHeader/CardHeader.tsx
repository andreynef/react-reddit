import React from 'react';
import styles from './CardHeader.css';
import {MetaData} from "./MetaData";
import {ActionsContent} from "./ActionsContent";
import {Menu} from "../../../modals/Menu";
import {Title} from "./Title";
import {useSelector} from "react-redux";
import {IInitialState} from "../../../../Store/initialState";
import {IPost} from "../../../../Store/Posts/postsActions";

interface ITextContentProps {
  commentsAmount:number;
  title:string;
  author: string,
  created: string,
  avatar:string,
  postId:string,
  subreddit:string,
}

export function CardHeader({commentsAmount, title, created, author, avatar, postId, subreddit}:ITextContentProps) {
  // console.log(date)

  return (
    <div className={styles.cardHeaderContainer}>
      <div className={styles.metaMenuContainer}>
        <MetaData created={created} author={author} avatar={avatar}/>
        <Menu postId={postId}/>
      </div>
      <Title title={title} postId={postId} subreddit={subreddit}/>
      <ActionsContent commentsAmount={commentsAmount}/>
    </div>
  );
}
