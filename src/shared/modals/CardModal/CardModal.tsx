import React, {useEffect, useRef, useState} from 'react';
import styles from './Cardmodal.css';
import {FactNActionsPanel} from "./FactNActionsPanel.tsx";
import {SortingPanel} from "./SortingPanel.tsx";
import {ModeratorDelete} from "./ModeratorDelete";
import {HeaderModal} from "./HeaderModal";
import {MainBodyModal} from "./MainBodyModal";
import {ExitButtonModal} from "./ExitButtonModal";
import {CommentsRoot} from "./CommentsFullModal";
import ReactDOM from 'react-dom';
import {useOutsideClick} from "../../../myHooks/useOutsideClick";
import {CommentForm} from "./CommentForm";
import {Break} from "../../supportingComponents/Break";
import {usePortalZone} from "../../../myHooks/usePortalZone";

interface ICardModal {
  onClose:()=>void;
  id?: string;
}

export function CardModal({onClose, id}:ICardModal) {

  //--------для клика снаружи----------
        const ref = useRef<HTMLDivElement>(null);//По умолчанию null; Теперь у обьекта есть св-во current в кот лежит ссылка на дом ноду модалки (указали в <div ref={ref}>) .
        useOutsideClick({ref, onClose});//хук по клику снаружи. Вынес в MyHooks
  //-----------------------------------

  //----------для рендера в портал----------
        const [node] = usePortalZone();//document.querySelector('#modal_root');
        if(!node) return null;
  //----------------------------------------

  return ReactDOM.createPortal((
    <div className={styles.modalContainer} >
      <div className={styles.modalBody} ref={ref}>
        {/*<ExitButtonModal/>*/}
        {/*<HeaderModal/>*/}
        <MainBodyModal/>
        {/*<div style={{borderTop: '1px solid var(--grayD9)'}} />*/}
        {/*<FactNActionsPanel postId={'233'} votedPercentage={55} commentsCount={22}/>*/}
        {/*<CommentForm name={'Константин'}/>*/}
        {/*<SortingPanel/>*/}
        {/*<div style={{borderTop: '1px solid var(--grayD9)'}}/>*/}
        {/*<Break size={40}/>*/}
        {/*<CommentsRoot commentsArr={someListArr}/>*/}
        {/*<ModeratorDelete/>*/}
      </div>
    </div>
    ), node);//
}
