import React, {useState} from 'react';
import styles from './ActionsPanel.css';
import {EIcons} from "../../../../utils/enums/EIcons";
import {CommentModal} from "../../CommentModal";
import {AnswerLocalModal} from "../AnswerForm";
import {MenuButton} from "../../../supportingComponents/MenuButton";
import {ActionElement} from "./ActionElement";

interface IFactNActionsPanel {
  postId?: string;
  votedPercentage?: number;
  commentsCount?: number;
  isComment?: boolean;
}

export function ActionsPanel({postId, votedPercentage, commentsCount, isComment=false}:IFactNActionsPanel) {

  const [isModalOpened, setIsModalOpened] = useState(false);
  const [isAnswerOpened, setAnswerOpened] = useState(false);

  return (
    <div className={styles.actionsContainer}>
          <ActionElement text={`${commentsCount} Комментария`} icon={EIcons.warning} size={14}/>
          <ActionElement text={'Поделиться'} icon={EIcons.share} size={14} onClick={()=>console.log('Поделиться pressed')}/>
          <ActionElement text={'Ответить'} icon={EIcons.comment} size={14} onClick={()=>setIsModalOpened(true)}/>
          <ActionElement text={'Скрыть'} icon={EIcons.block} size={14} onClick={()=>console.log('Скрыть pressed')}/>
          <ActionElement text={'Сохранить'} icon={EIcons.block} size={14} onClick={()=>console.log('Сохранить pressed')}/>
          <ActionElement text={'Пожаловаться'} icon={EIcons.warning} size={14} onClick={()=>console.log('Пожаловаться pressed')}/>

      {!isComment &&(
      <span>{votedPercentage}% Проголосовали</span>
      )}
      {isModalOpened && <CommentModal onClose={()=>{console.log('CommentFormContainer onClose is done -> isModalOpened to "false"');setIsModalOpened(false)}} name={'"User from props"'}/>}
      {isAnswerOpened && <AnswerLocalModal name={'"User from props"'} onClose={()=>setAnswerOpened(false)}/>}
      {/*{isAnswerOpened && <AnswerModalPortalUncontrolled name={'"User from props"'} onClose={()=>setAnswerOpened(false)}/>}*/}
      {/*{isAnswerOpened && <AnswerModalLocalControlled name={'"User from props"'} onClose={()=>setAnswerOpened(false)}/>}*/}
      {/*{isAnswerOpened && <AnswerModalLocalUncontrolled name={'"User from props"'} onClose={()=>setAnswerOpened(false)}/>}*/}

    </div>
  );
}
