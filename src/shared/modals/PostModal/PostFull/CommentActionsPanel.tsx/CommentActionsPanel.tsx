import React, {useState} from 'react';
import styles from './CommentActionsPanel.css';
import {EIcons} from "../../../../utils/enums/EIcons";
import {CommentModal} from "../../CommentModal";
import {AnswerLocalModal} from "../AnswerForm";
import {MenuButton} from "../../../supportingComponents/MenuButton";
import {CommentForm} from "../CommentForm";

interface IFactNActionsPanel {
  postId?: string;
  votedPercentage?: number;
  commentsCount?: number;
  isComment?: boolean;
}

export function CommentActionsPanel({postId, votedPercentage, commentsCount, isComment=false}:IFactNActionsPanel) {

  const [isModalOpened, setIsModalOpened] = useState(false);

  return (
    <div className={styles.actionsContainer}>
      <MenuButton text={'Ответить'} onClick={()=>setIsModalOpened(true)} icon={EIcons.comment} className={styles.actionButton}/>
      <MenuButton text={'Ответить'} onClick={()=>setIsModalOpened(true)} icon={EIcons.comment} className={styles.actionButton}/>
      <MenuButton text={'Ответить'} onClick={()=>setIsModalOpened(true)} icon={EIcons.comment} className={styles.actionButton}/>

      {isModalOpened &&
      <CommentModal
        onClose={()=>{setIsModalOpened(false)}}
        name={'"User from props"'}/>
      }
    </div>
  );
}


