import React from 'react';
import styles from './cardlistBookmark.css';
import {GenericList} from "../../utils/GenericList";
import {useSelector} from "react-redux";
import {IPost} from "../../Store/Posts/postsActions";
import {IInitialState} from "../../Store/initialState";
import {Card} from "../CardsList/Card";
import {EmptyCard} from "./EmptyCard";
import {FaceHmm} from "./FaceHmm";

export function CardListBookmark() {
  console.log('in CardListBookmark')

  const list = useSelector<IInitialState,IPost[]>(state => state.posts.list);

  const pathname = window.location.pathname.split("/")[1];

  let filteredList;

  if(pathname==='saved'){
    filteredList = list.filter(item=>(item.isSaved));
  }else if (pathname==='myposts'){
    filteredList = list.filter(item=>(item.isMyPost));
  }else if (pathname==='seen'){
    filteredList = list.filter(item=>(item.isSeen));
  }else if (pathname==='commented'){
    filteredList = list.filter(item=>(item.isCommented));
  }else return null
  console.log('filteredList:',filteredList)

  return (

    <ul className={styles.cardList}>
      {filteredList.length >0
        ?
        <GenericList list={filteredList.map((item)=>(
          {
            id:item.id,
            children: <Card item={item}/>,
            className:styles.card
          }
        ))
        }/>
        :
        <>
          <EmptyCard/>
          <EmptyCard/>
          <EmptyCard/>
          <EmptyCard/>
          <EmptyCard/>
          <FaceHmm/>
        </>
      }

    </ul>
  )
}



