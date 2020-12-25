import {ActionCreator, AnyAction, Reducer} from "redux";

export type RootState = {
  commentText:string;
}

const initialState: RootState = {
  commentText: 'harlouu'
}

//------AC-----------
const UPDATE_COMMENT = 'UPDATE_COMMENT';
export const updateComment: ActionCreator<AnyAction> = (text) => ({
  type: UPDATE_COMMENT,
  text,
});

//-------reducer-----------
export const reducer: Reducer<RootState> = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_COMMENT:
      return {
        ...state,
        comment: action.text
      };
  default:
  return state;
  }
}
//----------------------------

