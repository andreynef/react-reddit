import React, {useEffect, useRef, useState} from 'react';
import styles from './cardlist.css';
import {GenericList} from "../../utils/GenericList";
import {Card} from "./Card";
import {CircleLoader} from "../img/CircleLoader";
import {useDispatch, useSelector} from "react-redux";
import {IPost, postListRequestThunk} from "../../Store/Posts/postsActions";
import {IInitialState} from "../../Store/initialState";

export function CardList() {

  let list;
  const bookmark = useSelector<IInitialState,string>(state => state.bookmark);
  if(bookmark==='saved'){
    list = useSelector<IInitialState>(state => state.savedPosts)
  }else if (bookmark==='myposts'){
    list = useSelector<IInitialState>(state => state.myPosts)
  }else if (bookmark==='seen'){
    list = useSelector<IInitialState>(state => state.seenPosts)
  }else if (bookmark==='commented'){
    list = useSelector<IInitialState>(state => state.commentedPosts)
  }else{
    list = useSelector<IInitialState,IPost[]>(state => state.posts.list);
  }

  const isLoading = useSelector<IInitialState,boolean>(state => state.posts.isLoading);
  const dispatch = useDispatch();

  const bottomEl = useRef<HTMLDivElement>(null);

  useEffect(()=>{//хук по проверке достижения днища.
    const observer = new IntersectionObserver((entries)=>{
      if (entries[0].isIntersecting){//наблюдаемый элемент лежащий в позиции [0] находится в зоне видимости.
        dispatch(postListRequestThunk())
        console.log('loading more');
      }
    },{
      rootMargin:'50px',//расстояние от дна окна.
    });

    if(bottomEl.current){//если bottomEl отрендерен - наблюдать
      observer.observe(bottomEl.current)
    }
    return ()=>{//затирка старого слушателя т.к. далее рендер нового элемента и соотв нов слуш.
      if(bottomEl.current){
        observer.unobserve(bottomEl.current)
      }
    }
  },[])

  return (

    <ul className={styles.cardList}>

      {list.length === 0 && !isLoading  &&(//--------------!!!!!!!!!!
        <div role={'alert'} style={{textAlign:'center'}}>
          Нет ни одного поста
        </div>
      )}

      <GenericList list={list.map((item)=>(
        {
          id:item.id,
          children: <Card item={item}/>,
          className:styles.card
        }
      ))
      }/>

      {isLoading && <div style={{textAlign:'center'}}><CircleLoader/></div>}

      <div ref={bottomEl}/>

    </ul>
  )
}



