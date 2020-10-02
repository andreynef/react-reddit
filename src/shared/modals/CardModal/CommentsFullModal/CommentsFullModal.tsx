import React from 'react';
import styles from './commentsfullmodal.css';
import {HeaderMeta} from "../HeaderModal/HeaderTextBlock/HeaderMeta";
import {CommentedItem} from "./CommentedItem";

interface IcommentsListProps {
  commentsArr: string[];
}

export function CommentsFullModal({commentsArr}:IcommentsListProps) {
  return (
    <ul className={styles.list}>
      {/*{commentsArr}*/}
      <CommentedItem/>
    </ul>
  );
}
