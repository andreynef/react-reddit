import React from 'react';
import styles from './header.css';
import {SearchBlock} from "./SearchBlock";
import {ThreadTitle} from "./ThreadTitle";
import {Avatar} from "./Avatar";
import {EnvelopeButton} from "./SearchBlock/EnvelopeButton";
import {Break} from "../Break";
import {SortBlock} from "../SortBlock";

interface IHeaderProps {
  openedThread: string;
  bookmark: string;
}

export function Header({openedThread, bookmark}:IHeaderProps) {
  return (
    <header className={styles.container}>
      {/*1 блок Поиск и Конверт и Ава*/}
      <div className={styles.searchGroup}>
        <Avatar/>
        <Break size={16} mobileSize={16} tabletSize={30} desktopSize={50}/>
        <SearchBlock />
        <Break size={16} mobileSize={16} tabletSize={30} desktopSize={50}/>
        <EnvelopeButton/>
      </div>

      {/*2 блок Заголовок и Дроп*/}
      <div className={styles.threadContainer}>
        <div className={styles.titleContainer}>
          <ThreadTitle openedThread={openedThread}/>
        </div>
        <Break size={30}/>
        <nav className={styles.navContainer}>
          <SortBlock openedThread={openedThread} bookmark={bookmark}/>
        </nav>
      </div>

      {/*доп блок nav спец для дексктоп версии и личного кабинета ибо гемор с адаптивом*/}
      {/*<div className={styles.sortBlockDesktop}>*/}
      {/*  /!*<SortBlock openedThread={openedThread} activeSortItem={activeSortItem}/>*!/*/}
      {/*    <SortItemsListDesktop*/}
      {/*      openedThread={openedThread}*/}
      {/*      activeSortItem={activeSortItem}*/}
      {/*    />*/}
      {/*</div>*/}
    </header>
  );
}





