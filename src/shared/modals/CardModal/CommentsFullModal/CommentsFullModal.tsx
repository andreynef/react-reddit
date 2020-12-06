import React from 'react';
import styles from './commentsfullmodal.css';
import {HeaderMeta} from "../HeaderModal/HeaderTextBlock/HeaderMeta";
import {CommentItem} from "./CommentedItem";
import {Break} from "../../../supportingComponents/Break";


export function CommentsList() {
  return (
    <ul className={styles.list}>
      {/*{commentsArr}*/}
      <CommentItem/>
      {/*<CommentItem/>*/}
    </ul>
  );
}
