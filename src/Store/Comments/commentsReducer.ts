import {Reducer} from "redux";
import {RootStateOrAny} from "react-redux";
import {
  COMMENTS_REQUEST,
  COMMENTS_REQUEST_ERROR,
  COMMENTS_REQUEST_SUCCESS, CommentsRequestAction, CommentsRequestErrorAction, CommentsRequestSuccessAction,
} from "./commentsActions";


type CommentsActions =
  CommentsRequestAction |
  CommentsRequestSuccessAction |
  CommentsRequestErrorAction;

export const commentsReducer: Reducer<RootStateOrAny, CommentsActions> = (state, action) => {
  switch (action.type) {

    case COMMENTS_REQUEST:
      return {
        ...state,
        isLoading: true
      };

    case COMMENTS_REQUEST_SUCCESS:
      return {
        ...state,
        list: action.filteredDataArr,
        isLoading: false,
      };

    case COMMENTS_REQUEST_ERROR:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };

    default:
      return state;
  }
}