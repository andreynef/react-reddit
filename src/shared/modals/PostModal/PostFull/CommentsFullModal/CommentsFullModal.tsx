import React from 'react';
import styles from './commentsfullmodal.css';
import {CommentItem} from "./CommentedItem";
import {GenericList} from "../../../../../utils/GenericList";
import {useSelector} from "react-redux";
import {IInitialState} from "../../../../../Store/initialState";
import {IComment} from "../../../../../Store/Comments/commentsActions";


export function CommentsList() {

  const commentsList = useSelector<IInitialState, IComment[]>(state => state.comments.list);

  console.log('commentsList got from store:', commentsList);

  return (
    <ul className={styles.list}>
      <GenericList list={commentsList.map((item:IComment)=>(
        {
          id:item.id,
          children: <CommentItem item={item}/>,
        }
      ))
      }/>
    </ul>
  );
}
