import React, {useContext} from 'react';
import styles from './cardlist.css';
import {Card} from "./Card";
import {EmptyCard} from "./EmptyCard";
import {FaceHmm} from "./FaceHmm";
import {GenericList} from "../../utils/GenericList";
import {postsContext} from "../context/postsContext";
import {addRandomId} from "../../utils/react/generateRandomId";

export function CardList() {

  const listTemplate = [
      {author:'Pupkin Who', date: '10/10/2020', avatar: 'url1', title: 'Реализация намеченных плановых заданий', karma: '255', commentsAmount: 2, isSaved: false},
      {author:'Pupkin Why', date: '10/10/2020', avatar: 'url2', title: 'some title2', karma: 234, commentsAmount: 3, isSaved: true},
      {author:'Pupkin What', date: '10/10/2020', avatar: 'url3', title: 'some title3', karma: 46, commentsAmount: 4, isSaved: true},
      {author:'Pupkin Where', date: '10/10/2020', avatar: 'url4', title: 'some title4', karma: 56756, commentsAmount: 5, isSaved: false},
      {author:'Pupkin When', date: '10/10/2020', avatar: 'url5', title: 'some title5', karma: 67867766, commentsAmount: 6, isSaved: true},
    ].map(addRandomId)//к кажд обьекту массива будет добавлен id вида id: 6r26er235re

  // const {list} = useContext(postsContext);

  const listVary = listTemplate;//list?list:listTemplate

  const cardsForGenericList = listVary.map((item:any)=>(
      {
        id:item.id,
        children: <Card item={item}/>,
      }
    ));

  return (
    <ul className={styles.cardList}>
      {listVary.length === 0 && (
        <>
          <EmptyCard/>
          <EmptyCard/>
          <EmptyCard/>
          <EmptyCard/>
          <FaceHmm/>
        </>
      )}
      {listVary.length !==0 && <GenericList list={cardsForGenericList}/>}
    </ul>
  )
}
