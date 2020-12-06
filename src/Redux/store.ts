import {Reducer} from "redux";
import {SET_PROFILE, SET_TOKEN, UPDATE_COMMENT} from "./actions/actionTypes";

export type RootState = {
  commentText:string;
  token:string;
  userProfile: {
    name:string,
    avaUrl:string
  }
}

export const initialState: RootState = {
  commentText: 'harlouu',
  token:'storeToken: empty',
  userProfile: {
    name:'',
    avaUrl:''
  }
}

export const rootReducer: Reducer<RootState> = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_COMMENT:
      return {
        ...state,
        commentText: action.text
      };
    case SET_TOKEN:
      return {
        ...state,
        token: action.token
      };
    case SET_PROFILE:
      return {
        ...state,
        userProfile: {
          ...state.userProfile,
          name:action.name,
          avaUrl:action.avaUrl
        }
      };
    default:
      return state;
  }
}