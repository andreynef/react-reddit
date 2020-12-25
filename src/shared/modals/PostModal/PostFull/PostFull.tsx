import React, {useEffect, useRef} from 'react';
import styles from './postFull.css';
import {ActionsPanel} from "./ActionsPanel.tsx";
import {SortingPanel} from "./SortingPanel.tsx";
import {ModeratorDelete} from "./ModeratorDelete";
import {HeaderModal} from "./HeaderModal";
import {MainBodyModal} from "./MainBodyModal";
import {CommentsList} from "./CommentsFullModal";
import {Break} from "../../../supportingComponents/Break";
import {CommentFormContainer} from "../../CommentFormContainer/CommentFormContainer";
import {hiddenBodyScroll, visibleBodyScroll} from "../../../../utils/react/scrollBlocker";
import {useHistory } from 'react-router-dom';
import {useOutsideClick} from "../../../../myHooks/useOutsideClick";
import {ExitButtonModal} from "./ExitButtonModal";

export function PostFull() {

  useEffect(()=>{//блокиратор скролла <body>. Render - on, unRender - off.
    // disableBodyScroll()// disableBodyScroll({ savePosition: true }) для сохранения позиции (импю для меню)
    hiddenBodyScroll()
    console.log('scroll blocked')
    return ()=>{
      // enableBodyScroll()
      visibleBodyScroll()
      console.log('scroll unlocked')
    }
  },[])

  //--------для клика снаружи----------
  const history = useHistory();
  const ref = useRef<HTMLDivElement>(null);
  useOutsideClick(ref, ()=>{history.push('/')});
  //-----------------------------------

  return (
    <section className={styles.postFullBackside}>
      <div className={styles.postFullContainer} ref={ref}>
        <HeaderModal/>
        <MainBodyModal/>
        <Break size={20} top/>
        <div style={{borderTop: '1px solid var(--grayD9)'}} />
        <ActionsPanel/>
        <Break size={12} top/>
        <CommentFormContainer/>
        <SortingPanel/>
        <div style={{borderTop: '1px solid var(--grayD9)'}}/>
        <Break size={40}/>
        <CommentsList/>
        <ModeratorDelete/>
        <ExitButtonModal onClose={()=>history.push('/')}/>
      </div>
    </section>
  )
}
