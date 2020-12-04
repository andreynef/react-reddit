import React from 'react';
import styles from './commentsfullmodal.css';
import {HeaderMeta} from "../HeaderModal/HeaderTextBlock/HeaderMeta";
import {CommentItem} from "./CommentedItem";
import {Break} from "../../../supportingComponents/Break";

interface IcommentsListProps {
  commentsArr: string[];
}

export function CommentsRoot({commentsArr}:IcommentsListProps) {
  return (
    <ul className={styles.list}>
      {/*{commentsArr}*/}
      <CommentItem/>
      <CommentItem/>
    </ul>
  );
}
