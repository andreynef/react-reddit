import React, {ChangeEvent, FormEvent} from "react";
import {useDispatch, useSelector, useStore} from "react-redux";
import {RootState, updateComment} from "../storeTheory";
import {CommentFormmm} from "../CommentFormmm";

//компонента-контейнер. Redux и State.

export function CommentFormmmContainer() {

  //-----1 вариант доставания значения из стора-----------
  // const store = useStore<RootState>();
  // const value2 = store.getState().commentText;
  //---------2 вариант -----------------------------------
  const value3 = useSelector<RootState, string>(state => state.commentText)
  //------------------------------------------------------

  const dispatch = useDispatch();

  // const {value, onChange} = useContext(commentContext);//уже не нужен

  function handleChange(event:ChangeEvent<HTMLTextAreaElement>){
    // onChange(event.target.value);// вариант до редукса
    dispatch({type:'UPDATE_COMMENT', text:event.target.value});
    dispatch(updateComment(event.target.value));// либо без АС: dispatch({type:'UPDATE_COMMENT', text:event.target.value});
  }

  const handleSubmit = (event:FormEvent)=>{
    event.preventDefault();
  }

  return (
    <CommentFormmm
      value={value3}
      onChange={handleChange}
      onSubmit={handleSubmit}
      name={'hey you'}/>
  );
}