import React, {useEffect, useRef, useState} from 'react';
import styles from './Cardmodal.css';
import {ActionsPanel} from "./ActionsPanel.tsx";
import {SortingPanel} from "./SortingPanel.tsx";
import {ModeratorDelete} from "./ModeratorDelete";
import {HeaderModal} from "./HeaderModal";
import {MainBodyModal} from "./MainBodyModal";
import {ExitButtonModal} from "./ExitButtonModal";
import {CommentsList} from "./CommentsFullModal";
import ReactDOM from 'react-dom';
import {useOutsideClick} from "../../../myHooks/useOutsideClick";
import {CommentForm} from "./CommentForm";
import {Break} from "../../supportingComponents/Break";
import {usePortalZone} from "../../../myHooks/usePortalZone";
import {useOnClickOutside} from "../../../myHooks/useOnClickOutside";
import {CommentModal} from "../CommentModal";

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
        const node = document.querySelector('#modal_root');
        if(!node) return null;
  //----------------------------------------

  return ReactDOM.createPortal((
    <div className={styles.modalContainer} >
      <div className={styles.modalBody} ref={ref}>
        <ExitButtonModal/>
        <HeaderModal/>
        <MainBodyModal/>
        <div style={{borderTop: '1px solid var(--grayD9)'}} />
        <ActionsPanel postId={'233'} votedPercentage={55} commentsCount={22}/>
        <SortingPanel/>
        <div style={{borderTop: '1px solid var(--grayD9)'}}/>
        <Break size={40}/>
        <CommentsList/>
        <ModeratorDelete/>
      </div>
    </div>
    ), node);
}
