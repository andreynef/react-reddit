import React from 'react';
import styles from './thread.css';
import {useSelector} from "react-redux";
import {IInitialState} from "../../../Store/initialState";
import {PostsSourceDrop} from "./PostsSourceDrop";
import {Break} from "../../supportingComponents/Break";

export function Thread() {
  // const isPrivate = useSelector<IInitialState, boolean>(state => state.isPrivate);
  const isPrivate = true;

  return (
    <div className={styles.threadContainer}>
      <div className={styles.titleContainer}>
        <h1 className={styles.threadTitle}>
          {isPrivate?'Личный кабинет':'Дискуссии'}
        </h1>
      </div>
    </div>
  );
}
