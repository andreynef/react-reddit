import React from 'react';
import styles from './title.css';
import {useDispatch} from "react-redux";
import {openPostThunk} from "../../../../../Store/Comments/commentsActions";
import {Link} from "react-router-dom";
import {postSeenAC} from "../../../../../Store/Posts/postsActions";

interface ITitleProps {
  title: string,
  postId:string,
  subreddit:string,
}

export function Title({title, postId, subreddit}:ITitleProps) {
  const dispatch = useDispatch();

  const handleClick = () =>{
    dispatch(openPostThunk(subreddit,postId));
    dispatch(postSeenAC(postId));
  }

  return (
      <h2 className={styles.titleContainer} >
        <Link to={`/post/${postId}`} onClick={handleClick}>
          {title}
        </Link>
      </h2>
  )
}
      // было
      // компонент находится здесь для лучшего поиска/структуры а рендерится через портал дабы не задевать чужие стили. Смысл в избежании влияния стилей.
      // {isModalOpened && <PostModal onClose={()=>setIsModalOpened(false)}/>}
