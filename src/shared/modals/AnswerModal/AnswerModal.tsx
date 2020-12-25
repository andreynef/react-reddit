import React, {ChangeEvent, FormEvent, useEffect, useRef, useState} from 'react';
import styles from './answerModal.css';
import ReactDOM from 'react-dom';
import {useOutsideClick} from "../../../myHooks/useOutsideClick";
import {usePortalZone} from "../../../myHooks/usePortalZone";
import {CommentFormContainer} from "../CommentFormContainer/CommentFormContainer";
import {useDispatch, useSelector} from "react-redux";
import {ICommentModal, IInitialState} from "../../../Store/initialState";
import {closeAnswerAC, submitAnswerThunk, updateCommentAC} from "../../../Store/actions";
import {useOnClickOutside} from "../../../myHooks/useOnClickOutside";
import {CommentForm} from "../PostModal/PostFull/CommentForm";
import { useHistory } from 'react-router-dom';
import {Portal} from "../../../utils/Portal";
import {IComment} from "../../../Store/Comments/commentsActions";
import {ICommentItem} from "../PostModal/PostFull/CommentsFullModal/CommentedItem";


interface IAnswerModal {
  item: IComment,
  onClose:()=>void,
}

export function AnswerModal({item, onClose}:IAnswerModal) {
  const [value, setValue]=useState('');

  function handleChange (event:ChangeEvent<HTMLTextAreaElement>){
    setValue(event.target.value);
  }

  function handleSubmit (event:FormEvent){
    event.preventDefault();
    alert(`submitted value:"${value}", id:"${item.id}"`);
    onClose();
  }
  //--------для клика снаружи-----------------------------
        const ref = useRef<HTMLDivElement>(null);
        useOnClickOutside(ref, onClose);// или useOutsideClick
  //------------------------------------------------------

  return (
    <div className={styles.modalContainer} >{/*задний фон*/}
      <div ref={ref}>{/*обертка для самой модалки*/}
        <CommentForm//многоразовая форма
          author={item.author}
          value={value}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
);
}
