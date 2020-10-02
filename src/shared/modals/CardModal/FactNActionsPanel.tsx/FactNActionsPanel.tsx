import React from 'react';
import styles from './factNActionsPanel.css';
import {BlockIcon, CommentIcon, SaveIcon, ShareIcon, WarningIcon} from "../../../Icons";

interface IFactNActionsPanel {
  postId?: string;
  votedPercentage?: number;
  commentsCount?: number;
  isComment?: boolean;
}

export function FactNActionsPanel({postId, votedPercentage, commentsCount, isComment=false}:IFactNActionsPanel) {
  return (
    <div className={styles.actionsContainer}>
      <ul className={styles.actionsList}>
      {isComment === false  && (
        <>
          <li className={styles.actionsItem}>
            <CommentIcon />
            <span>{commentsCount} Комментария</span>
          </li>
          <li className={styles.actionsItem} onClick={()=>console.log('Button has been pressed')}>
            <ShareIcon />
            <span>Поделиться</span>
          </li>
          <li className={styles.actionsItem} onClick={()=>console.log('postId: '+ postId + ' .Button has been pressed')}>
            <BlockIcon />
            <span>Скрыть</span>
          </li>
          <li className={styles.actionsItem} onClick={()=>console.log('Button has been pressed')}>
            <SaveIcon />
            <span>Сохранить</span>
          </li>
          <li className={styles.actionsItem} onClick={()=>console.log('Button has been pressed')}>
            <WarningIcon />
            <span>Пожаловаться</span>
          </li>
        </>
      )}
      {isComment &&(
        <>
          <li className={styles.actionsItem} onClick={()=>console.log('Button has been pressed')}>
            <CommentIcon />
            <span>Ответить</span>
          </li>
          <li className={styles.actionsItem} onClick={()=>console.log('Button has been pressed')}>
            <ShareIcon />
            <span>Поделиться</span>
          </li>
          <li className={styles.actionsItem} onClick={()=>console.log('Button has been pressed')}>
            <WarningIcon />
            <span>Пожаловаться</span>
          </li>
        </>
      )}

      </ul>
      {!isComment &&(
      <span>{votedPercentage}% Проголосовали</span>
      )}
    </div>
  );
}


