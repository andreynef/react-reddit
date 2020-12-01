import React from 'react';
import styles from './searchgroup.css';
import {NewMessages} from "./NewMessages";
import {UserBlock} from "../UserBlock";
import {SearchBlock} from "./SearchBlock";
import {UserContextProvider} from "../../context/userContext";

export function SearchGroup() {
  return (
    <div className={styles.searchGroup}>
      <UserContextProvider>{/*получает данные о пользователе, замыкает их в контексте, и передает их люб компоненту*/}
        <UserBlock/>
      </UserContextProvider>
      <SearchBlock/>
      <NewMessages/>
    </div>
  );
}
{/*<Break size={16} mobileSize={16} tabletSize={30} desktopSize={50}/>*/}
