import {ActionCreator, AnyAction} from "redux";
import {SET_PROFILE, SET_TOKEN, UPDATE_COMMENT} from "./actionTypes";

export const updateComment: ActionCreator<AnyAction> = (text) => ({
  type: UPDATE_COMMENT,
  text,
});

export const setToken: ActionCreator<AnyAction> = (token) => ({
  type: SET_TOKEN,
  token,
});

export const setProfile: ActionCreator<AnyAction> = (name, avaUrl) => ({
  type: SET_PROFILE,
  name,
  avaUrl
});