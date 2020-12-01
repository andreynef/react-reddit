import React from 'react';
import styles from './sortblock.css';
import {ArrowIcon, EyeIcon, CommentIcon, PencilIcon, RocketIcon, SaveIcon} from "../Icons";
import {Text} from "../supportingComponents/Text";
import {Dropdown} from "../Dropdown";
import {Break} from "../supportingComponents/Break";
import {SortItemsList} from "./SortItemsList";
import {EColors} from "../../utils/enums/EColors";
import {SortItemsListDesktop} from "./SortItemsListDesktop";



export function SortBlock() {

  const openedThread = 'private';
  const bookmark = 'saved';

  return (
    <nav className={styles.sortContainer}>
    {/*/!*Дроп при Дискуссии*!/*/}
    {/*  {openedThread ==='discussion' &&(*/}
    {/*    // <div className={styles.sortBlock}>*/}
    {/*      <Dropdown//Контейнер с логикой дропа*/}
    {/*        button={*/}
    {/*          <div className={styles.sortBlockDiscussionButton}>*/}
    {/*            <div>*/}
    {/*              <RocketIcon />*/}
    {/*              <Break size={8} inline/>*/}
    {/*              <Text size={12} color={EColors.orange} tabletSize={20}>Лучшие</Text>*/}
    {/*              <Break size={8} inline/>*/}
    {/*            </div>*/}
    {/*            <div className={styles.arrowIcon}>*/}
    {/*              <ArrowIcon/>*/}
    {/*            </div>*/}
    {/*          </div>*/}
    {/*        }*/}
    {/*      >*/}
    {/*        <div className={styles.dropdown}>*/}
    {/*          some best list*/}
    {/*        </div>*/}
    {/*      </Dropdown>*/}
    {/*    // </div>*/}
    {/*  )}*/}

    {/*Дроп при Личном кабинете*/}
      {openedThread ==='private' &&(
        <div className={styles.sortBlock}>
          <Dropdown//Контейнер с логикой дропа
            button={
              <div className={styles.sortBlockPrivateButton}>
                {bookmark === 'saved' && (
                  <div>
                    <SaveIcon />
                    <Break size={8} inline/>
                    <Text size={12} color={EColors.orange}>Сохраненное</Text>
                  </div>
                )}
                {/*{bookmark === 'commented' && (*/}
                {/*  <div>*/}
                {/*    <CommentIcon />*/}
                {/*    <Break size={8} inline/>*/}
                {/*    <Text size={12}>Прокомментированное</Text>*/}
                {/*  </div>*/}
                {/*)}*/}
                {/*{bookmark === 'seen' && (*/}
                {/*  <div>*/}
                {/*    <EyeIcon />*/}
                {/*    <Break size={8} inline/>*/}
                {/*    <Text size={12}>Просмотренное</Text>*/}
                {/*  </div>*/}
                {/*)}*/}
                {/*{bookmark === 'posts' && (*/}
                {/*  <div>*/}
                {/*    <PencilIcon />*/}
                {/*    <Break size={8} inline/>*/}
                {/*    <Text size={12}>Мои посты</Text>*/}
                {/*  </div>*/}
                {/*)}*/}
                <div className={styles.arrowIcon}>
                  <ArrowIcon/>
                </div>
              </div>
            }
          >
            <div className={styles.dropdown}>
              <SortItemsList bookmark={bookmark}/>
              <button className={styles.closeButton}>
                <Text size={12}>Закрыть</Text>
              </button>
            </div>
          </Dropdown>
        </div>
      )}

      {/*доп блок nav спец для дексктоп версии и личного кабинета ибо гемор с адаптивом*/}
      {/*<SortBlock openedThread={openedThread} activeSortItem={'saved'}/>*/}
      {/*  <SortItemsListDesktop*/}
      {/*    openedThread={openedThread}*/}
      {/*    activeSortItem={'saved'}*/}
      {/*  />*/}
    </nav>
  );
}
