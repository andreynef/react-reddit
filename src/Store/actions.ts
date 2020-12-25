import {ActionCreator} from "redux";

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
