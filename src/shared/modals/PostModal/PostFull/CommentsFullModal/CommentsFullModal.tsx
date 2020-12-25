import React from 'react';
import styles from './commentsfullmodal.css';
import {HeaderMeta} from "../HeaderModal/HeaderTextBlock/HeaderMeta";
import {CommentItem} from "./CommentedItem";
import {Break} from "../../../supportingComponents/Break";
import {Card} from "../../../CardsList/Card";
import {GenericList} from "../../../../utils/GenericList";


export function CommentsList() {

  return (
    <ul className={styles.list}>
      {/*<GenericList list={list.map((item)=>(*/}
      {/*  {*/}
      {/*    id:item.id,*/}
      {/*    children: <CommentItem/>,*/}
      {/*  }*/}
      {/*))*/}
      {/*}/>*/}
      <CommentItem/>
      <CommentItem/>
      <CommentItem/>
    </ul>
  );
}
