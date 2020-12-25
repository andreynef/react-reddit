import React, {ChangeEvent, FormEvent, useEffect, useRef, useState} from 'react';
import styles from './commentModal.css';
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
import {PostsSourceDrop} from "../../Header/Thread/PostsSourceDrop";
import {Portal} from "../../../utils/Portal";


export function CommentModal() {
  const dispatch = useDispatch();
  const data = useSelector<IInitialState, ICommentModal>(state=>state.commentModal);
  const isAnswerOpen = useSelector<IInitialState, boolean>(state=>state.isAnswerOpen);
  const [value, setValue]=useState('');
  console.log('im rendered')
  function handleChange (event:ChangeEvent<HTMLTextAreaElement>){
    setValue(event.target.value);
  }

  function handleSubmit (event:FormEvent){
    event.preventDefault();
    // alert('submitted :'+ value);
    dispatch(submitAnswerThunk(data.commentId,value));
  }
  //--------для клика снаружи-----------------------------
        const ref = useRef<HTMLDivElement>(null);
        useOnClickOutside(ref, ()=>dispatch(closeAnswerAC()));// или useOutsideClick
  //------------------------------------------------------

  return (
    <>
      {isAnswerOpen &&(
        <div className={styles.modalContainer} >{/*задний фон*/}
          <div ref={ref}>{/*обертка для самой модалки*/}
            <CommentForm//многоразовая форма
              author={data.author}
              value={value}
              onChange={handleChange}
              onSubmit={handleSubmit}
            />
          </div>
        </div>
      )}
    </>
);
}
