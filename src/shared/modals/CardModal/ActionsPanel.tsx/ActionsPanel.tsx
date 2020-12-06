import React, {useState} from 'react';
import styles from './ActionsPanel.css';
import {ActionElement} from "./ActionElement";
import {Icon} from "../../../supportingComponents/Icon";
import {EIcons} from "../../../../utils/enums/EIcons";
import {CommentModal} from "../../CommentModal";
import {
  AnswerModalLocalControlled, AnswerModalLocalUncontrolled,
  AnswerModalPortalControlled, AnswerModalPortalUncontrolled,
} from "../AnswerForm";

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
      {isComment === false  && (
        <>
          {/*<ActionElement text={`${commentsCount} Комментария`} icon={EIcons.warning} size={14}/>*/}
          {/*<ActionElement text={'Поделиться'} icon={EIcons.share} size={14} onClick={()=>console.log('Поделиться pressed')}/>*/}
          {/*<ActionElement text={'Ответить'} icon={EIcons.comment} size={14} onClick={()=>setIsModalOpened(true)}/>*/}
          {/*<ActionElement text={'Скрыть'} icon={EIcons.block} size={14} onClick={()=>console.log('Скрыть pressed')}/>*/}
          {/*<ActionElement text={'Сохранить'} icon={EIcons.block} size={14} onClick={()=>console.log('Сохранить pressed')}/>*/}
          {/*<ActionElement text={'Пожаловаться'} icon={EIcons.warning} size={14} onClick={()=>console.log('Пожаловаться pressed')}/>*/}
        </>
      )}
      {isComment &&(
        <>

          <button className={styles.actionButton} onClick={()=>setAnswerOpened(true)}>
            <Icon name={EIcons.comment} size={14}/>
            <span style={{marginLeft:'10px'}}>Ответить</span>
          </button>

          {/*<ActionElement text={'Ответить'} icon={EIcons.comment} size={14} onClick={()=>{console.log('Answer is pressed. Open modal');setIsModalOpened(true)}}/>*/}
          <ActionElement text={'Поделиться'} icon={EIcons.share} size={14} onClick={()=>console.log('Поделиться pressed')}/>
          <ActionElement text={'Пожаловаться'} icon={EIcons.warning} size={14} onClick={()=>console.log('Пожаловаться pressed')}/>
        </>
      )}

      {!isComment &&(
      <span>{votedPercentage}% Проголосовали</span>
      )}
      {isModalOpened && <CommentModal onClose={()=>{console.log('CommentModal onClose is done -> isModalOpened to "false"');setIsModalOpened(false)}} name={'"User from props"'}/>}
      {/*{isAnswerOpened && <AnswerModalPortalControlled name={'"User from props"'} onClose={()=>setAnswerOpened(false)}/>}*/}
      {/*{isAnswerOpened && <AnswerModalPortalUncontrolled name={'"User from props"'} onClose={()=>setAnswerOpened(false)}/>}*/}
      {/*{isAnswerOpened && <AnswerModalLocalControlled name={'"User from props"'} onClose={()=>setAnswerOpened(false)}/>}*/}
      {isAnswerOpened && <AnswerModalLocalUncontrolled name={'"User from props"'} onClose={()=>setAnswerOpened(false)}/>}
    </div>
  );
}


