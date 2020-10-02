import React, {useState} from 'react';
import styles from './Cardmodal.css';
import {MakeComment} from "./MakeComment";
import {FactNActionsPanel} from "./FactNActionsPanel.tsx";
import {SortingPanel} from "./SortingPanel.tsx";
import {ModeratorDelete} from "./ModeratorDelete";
import {HeaderModal} from "./HeaderModal";
import {MainBodyModal} from "./MainBodyModal";
import {ExitButtonModal} from "./ExitButtonModal";
import {CommentsFullModal} from "./CommentsFullModal";

interface ICardOpenProps {
  isOpen:boolean;
  id?: string;
}

export function CardModal({isOpen, id}:ICardOpenProps) {
  let someListArr = ['firstComment ', 'secondComment ', 'thirdComment '];

  return (
    <>
      {isOpen && (
        <div className={styles.modalContainer}>
          <div className={styles.modalBody}>
            <ExitButtonModal/>
            <HeaderModal/>
            <MainBodyModal/>
            <FactNActionsPanel postId={'233'} votedPercentage={55} commentsCount={22}/>
            <MakeComment name={'Константин'}/>
            <SortingPanel/>
            <CommentsFullModal commentsArr={someListArr}/>
            <ModeratorDelete/>
          </div>
        </div>
      )}
    </>
  )
}
