import React from 'react';
import styles from './header.css';
import {SearchGroup} from "./SearchGroup";
import {SortBlock} from "../SortBlock";
import {Title} from "./Title";
import {useSelector} from "react-redux";
import {IInitialState} from "../../Store/initialState";

export function Header() {

  const isPrivate = useSelector<IInitialState, boolean>(state => state.isPrivate);

  return (
    <header>
      <div className={styles.topContainer}>
        <SearchGroup />
        <Title/>
      </div>
      {isPrivate && <SortBlock/>}
    </header>
  );
}





