import React from 'react';
import styles from './headertextblock.css';
import {HeaderMeta} from "./HeaderMeta";
import {useSelector} from "react-redux";
import {IInitialState} from "../../../../../../Store/initialState";
import {IPost} from "../../../../../../Store/Posts/postsActions";

export function HeaderTextBlock() {
  const post = useSelector<IInitialState, IPost>(state => state.postModal);

  return (
    <div className={styles.container}>
      <h2>{post.title}</h2>
      <HeaderMeta name={post.author} subreddit={post.subreddit} avatar={post.avatar} created={post.created}/>
    </div>
  );
}
