import React from 'react';
import styles from './karmacounter.css';
import {ArrowFilledIcon} from "../../../../../Icons";
import {Break} from "../../../../../supportingComponents/Break";
import {useSelector} from "react-redux";
import {IInitialState} from "../../../../../../Store/initialState";
import {IPost} from "../../../../../../Store/Posts/postsActions";

export function KarmaCounter() {
  const post = useSelector<IInitialState, IPost>(state => state.postModal);


  return (
    <div className={styles.container}>
      <button className={styles.up}>
        <ArrowFilledIcon/>
      </button>
      <Break size={8} inline/>
      <span className={styles.value}>{post.score}</span>
      <Break size={8} inline/>
      <button className={styles.down}>
        <ArrowFilledIcon/>
      </button>
    </div>
  );
}
