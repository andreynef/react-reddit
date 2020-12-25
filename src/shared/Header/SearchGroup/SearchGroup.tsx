import React from 'react';
import styles from './searchgroup.css';
import {NewMessages} from "./NewMessages";
import {UserBlock} from "./UserBlock";
import {SearchBlock} from "./SearchBlock";

export function SearchGroup() {

  return (
    <div className={styles.searchGroup}>
      <UserBlock/>
      <SearchBlock/>
      <NewMessages/>
    </div>
  );
}
{/*<Break size={16} mobileSize={16} tabletSize={30} desktopSize={50}/>*/}
