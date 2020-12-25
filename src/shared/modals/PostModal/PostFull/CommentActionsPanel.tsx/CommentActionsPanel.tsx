import React, {useState} from 'react';
import styles from './CommentActionsPanel.css';
import {EIcons} from "../../../../../utils/enums/EIcons";
import {MenuButton} from "../../../../supportingComponents/MenuButton";
import {AnswerModal} from "../../../AnswerModal";
import {ICommentItem} from "../CommentsFullModal/CommentedItem";

export function CommentActionsPanel({item}:ICommentItem) {
  const [isAnswerOpen, setIsAnswerOpen] = useState(false);

  return (
    <div className={styles.actionsContainer}>
      <MenuButton text={'Ответить'} onClick={()=>setIsAnswerOpen(true)} icon={EIcons.comment} className={styles.actionButton}/>
      <MenuButton text={'Поделиться'}  icon={EIcons.share} className={styles.actionButton}/>
      <MenuButton text={'Пожаловаться'} icon={EIcons.warning} className={styles.actionButton}/>
        {isAnswerOpen &&(
          <AnswerModal item={item} onClose={()=>setIsAnswerOpen(false)}/>
        )}
    </div>
  );
}
