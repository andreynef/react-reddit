import React from 'react';
import styles from './searchblock.css';
import {EnvelopeIcon, SearchIcon} from "../../Icons";
import {EnvelopeButton} from "./EnvelopeButton";
import {Break} from "../../Break";

export function SearchBlock() {
  return (
      <div className={styles.searchBlock}>
        <SearchIcon/>
        <Break size={4} tabletSize={12}/>
        <input placeholder={'поиск'} />
      </div>
  );
}
