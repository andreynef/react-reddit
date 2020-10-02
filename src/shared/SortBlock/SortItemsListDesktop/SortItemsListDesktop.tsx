import React from 'react';
import styles from './sortitemslistDesktop.css';
import {Text} from "../../Text";
import {EColors} from "../../../utils/enums/EColors";
import {Dropdown} from "../../Dropdown";
import {ArrowIcon, RocketIcon} from "../../Icons";
import {Break} from "../../Break";

interface ISortItemsListProps {
  activeSortItem: string;
  openedThread:string;
}

export function SortItemsListDesktop({openedThread,activeSortItem}:ISortItemsListProps) {
  return (
    <>
      {openedThread ==='private' &&(
        <nav className={styles.sortBlockMobile}>
          <ul className={styles.sortItemsListDesktop}>

            {/*Прокомментированное*/}
            <li className={styles.sortItemDesktop} onClick={()=>console.log('Button has been pressed')}>
              <Text size={20} color={EColors.black}>Прокомментированное</Text>
            </li>

            {/*Просмотренное*/}
            <li className={styles.sortItemDesktop} onClick={()=>console.log('Button has been pressed')}>
              <Text size={20} color={EColors.black}>Просмотренное</Text>
            </li>

            {/*Мои посты*/}
            <li className={styles.sortItemDesktop} onClick={()=>console.log('postId: '+ activeSortItem + ' .Button has been pressed')}>
              <Text size={20} color={EColors.black}>Мои посты</Text>
            </li>

            {/*Сохраненное*/}
            <li className={styles.sortItemDesktop} onClick={()=>console.log('Button has been pressed')}>
              <Text size={20} color={EColors.black}>Сохраненное</Text>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
}
