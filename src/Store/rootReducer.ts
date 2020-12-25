import {Reducer} from "redux";
import {
  PROFILE_REQUEST,
  PROFILE_REQUEST_ERROR,
  PROFILE_REQUEST_SUCCESS, ProfileRequestAction, ProfileRequestErrorAction,
  ProfileRequestSuccessAction
} from "./Profile/profileActions";
import {profileReducer} from "./Profile/profileReducer";
import {SET_TOKEN, SetTokenAction, UPDATE_COMMENT, UpdateCommentAction} from "./actions";
import {initialState, IinitialState} from "./initialState";
import {
  SET_TIMEOUT_TEST,
  SetTimeoutTestAction,
  TIMEOUT_TEST_SUCCESS,
  TimeoutTestSuccessAction
} from "./TimeoutTest/timeoutTestActions";
import {timeoutTestReducer} from "./TimeoutTest/timeoutTestReducer";
import {
  POSTLIST_REQUEST,
  POSTLIST_REQUEST_ERROR,
  POSTLIST_REQUEST_SUCCESS, PostListRequestAction, PostListRequestErrorAction,
  PostListRequestSuccessAction
} from "./Posts/postsActions";
import {postsReducer} from "./Posts/postsReducer";

type RootAction =
  SetTokenAction|
  UpdateCommentAction |
  ProfileRequestAction |
  ProfileRequestSuccessAction |
  ProfileRequestErrorAction |
  SetTimeoutTestAction |
  PostListRequestSuccessAction |
  PostListRequestAction |
  PostListRequestErrorAction |
  TimeoutTestSuccessAction;

export const rootReducer: Reducer<IinitialState, RootAction> = (state = initialState, action) => {
  switch (action.type) {
    case SET_TOKEN:
      return {
        ...state,
        token: action.token
      };
    case UPDATE_COMMENT:
      return {
        ...state,
        commentForm: action.comment
      };
    case PROFILE_REQUEST:
    case PROFILE_REQUEST_SUCCESS:
    case PROFILE_REQUEST_ERROR:
      return {
        ...state,
        profile: profileReducer(state.profile, action),
      };
    case POSTLIST_REQUEST:
    case POSTLIST_REQUEST_SUCCESS:
    case POSTLIST_REQUEST_ERROR:
      return {
        ...state,
        posts: postsReducer(state.posts, action),
      };
    case SET_TIMEOUT_TEST:
    case TIMEOUT_TEST_SUCCESS:
      return timeoutTestReducer(state, action)

    default:
      return state;
  }
}