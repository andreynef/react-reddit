import {Action, ActionCreator} from "redux";
import {ThunkAction} from "redux-thunk";
import {IInitialState} from "./initialState";
import {
  getPostFewKeys,
  postListRequestAC,
  postListRequestErrorAC,
  postListRequestSuccessAC
} from "./Posts/postsActions";
import axios from "axios";

//----------token---------------------

export const SET_TOKEN = 'SET_TOKEN'

export type SetTokenAction = {
  type: typeof SET_TOKEN ;
  token: string,
}

export const setTokenAC: ActionCreator<SetTokenAction> = (token) => ({
  type: SET_TOKEN,
  token,
});

export const saveTokenThunk = (token:string):ThunkAction<void, IInitialState, unknown, Action>=>(dispatch, getState)=> {//типизация из документации
  dispatch(setTokenAC(token));
  // axios...
}


//----------discussion or private room---------------------

export const TOGGLE_ROOM = 'TOGGLE_ROOM'

export type ToggleRoomAction = {
  type: typeof TOGGLE_ROOM ;
}

export const toggleRoomAC: ActionCreator<ToggleRoomAction> = () => ({
  type: TOGGLE_ROOM,
});

//----------discussion or private room---------------------

export const UPDATE_SEARCH = 'UPDATE_SEARCH'

export type UpdateSearchAction = {
  type: typeof UPDATE_SEARCH ;
  value: string;
}

export const updateSearchAC: ActionCreator<UpdateSearchAction> = (value) => ({
  type: UPDATE_SEARCH,
  value,
});


//----------commentForm---------------------

export const UPDATE_COMMENT = 'UPDATE_COMMENT'

export type UpdateCommentAction = {
  type: typeof UPDATE_COMMENT ;
  comment: string,
}

export const updateCommentAC: ActionCreator<UpdateCommentAction> = (comment) => ({
  type: UPDATE_COMMENT,
  comment,
});

export const SUBMIT_COMMENT = 'SUBMIT_COMMENT'

export type SubmitCommentAction = {
  type: typeof SUBMIT_COMMENT ;
  comment: string,
}

export const submitCommentAC: ActionCreator<SubmitCommentAction> = (comment) => ({
  type: SUBMIT_COMMENT,
  comment,
});

export const submitCommentThunk = ():ThunkAction<void, IInitialState, unknown, Action>=>(dispatch, getState)=> {//типизация из документации
  const value = getState().commentForm;
  const name = getState().profile.data.name;
  dispatch(submitCommentAC());
  alert(`submitted value: ${value}. From: ${name}`)
  // axios...
}
//----------postModal---------------------

export const OPEN_POST = 'OPEN_POST'

export type OpenPostAction = {
  type: typeof OPEN_POST ;
  postId: string,
}

export const openPostAC: ActionCreator<OpenPostAction> = (postId) => ({
  type: OPEN_POST,
  postId,
});

//----------AnswerModal---------------------

export const OPEN_ANSWER = 'OPEN_ANSWER'
export const CLOSE_ANSWER = 'CLOSE_ANSWER'

export type OpenAnswerAction = {
  type: typeof OPEN_ANSWER ;
  commentId: string,
}

export type CloseAnswerAction = {
  type: typeof CLOSE_ANSWER ;
}

export const openAnswerAC: ActionCreator<OpenAnswerAction> = (commentId) => ({
  type: OPEN_ANSWER,
  commentId,
});

export const closeAnswerAC: ActionCreator<CloseAnswerAction> = () => ({
  type: CLOSE_ANSWER,
});

export const submitAnswerThunk = (commentId:string, text:string):ThunkAction<void, IInitialState, unknown, Action>=>(dispatch, getState)=> {//типизация из документации
  dispatch(closeAnswerAC());//пока что тупо переключает на false
  alert(`axios, submitting "${text}" id: "${commentId}"`)
}