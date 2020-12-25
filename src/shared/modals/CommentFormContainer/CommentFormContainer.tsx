import React, {useEffect, useRef, useState} from 'react';
import styles from './commentModal.css';
import ReactDOM from 'react-dom';
import {useOutsideClick} from "../../../myHooks/useOutsideClick";
import {usePortalZone} from "../../../myHooks/usePortalZone";
import {CommentForm} from "../CardModal/CommentForm";

interface ICommentModal {
  onClose:()=>void;
  id?: string;
  name:string;
}

export function CommentModal({onClose, id, name}:ICommentModal) {

  //--------для клика снаружи----------
        const ref = useRef<HTMLDivElement>(null);
        // useOutsideClick({ref, onClose});//хук по клику снаружи. Вынес в MyHooks
  //-----------------------------------

  //----------для рендера в портал----------
        const [node] = usePortalZone();//document.querySelector('#modal_root');
        if(!node) return null;
  //----------------------------------------



  return ReactDOM.createPortal((
    <div className={styles.modalContainer}>
      <div className={styles.modalBody} >
        <CommentForm name={name}/>
      </div>
    </div>
    ), node);
}
