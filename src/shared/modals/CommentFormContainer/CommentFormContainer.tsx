import React, {ChangeEvent, FormEvent} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {IInitialState, IProfileData} from "../../../Store/initialState";
import {submitCommentThunk, updateCommentAC} from "../../../Store/actions";
import {CommentForm} from "../PostModal/PostFull/CommentForm";


export function CommentFormContainer() {
  const dispatch = useDispatch();
  const value = useSelector<IInitialState,string>(state=>state.commentForm);
  const name = useSelector<IInitialState, string>(state=>state.profile.data.name);

  function handleChange (event:ChangeEvent<HTMLTextAreaElement>){
    dispatch(updateCommentAC(event.target.value));
  }

  function handleSubmit (event:FormEvent){
    event.preventDefault();
    dispatch(submitCommentThunk())
  }

  return (
    <CommentForm
      author={name}
      value={value}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  )
}
