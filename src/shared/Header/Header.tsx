import React, {useContext} from 'react';
import styles from './header.css';
import {ThreadTitle} from "./ThreadTitle";
import {SortBlock} from "../SortBlock";
import {SearchGroup} from "./SearchGroup";



export function Header() {

  return (
    <header className={styles.headerContainer}>
        <SearchGroup />
        <ThreadTitle/>
        {/*<SortBlock/>*/}
    </header>
  );
}


// -----------
//func Header
// const {Consumer} = tokenContext;// вариант чер Consumer и в рендере <Consumer>{(what)=><Component what={what}>}<Consumer/>
// const token = useContext(tokenContext);//вариант чер хук
//
//render
// <Consumer>
//   {(contextttt)=>(
//     <UserBlock context={contextttt}/>
//   )}
// </Consumer>

// -------------------


