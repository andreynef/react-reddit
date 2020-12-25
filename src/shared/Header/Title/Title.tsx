import React from 'react';
import styles from './title.css';
import {SourceDrop } from './SourceDrop';
import {useSelector} from "react-redux";
import {IInitialState} from "../../../Store/initialState";

export function Title() {

  const isPrivate = useSelector<IInitialState, boolean>(state => state.isPrivate);

  return (
    <div className={styles.threadContainer}>
      <div className={styles.titleContainer}>
        <h1 className={styles.threadTitle}>
          {isPrivate?'Личный кабинет':'Дискуссии'}
        </h1>
      </div>
      {!isPrivate && <SourceDrop/>}
    </div>
  );
}
