import {Reducer} from "redux";
import {
  PROFILE_REQUEST,
  PROFILE_REQUEST_ERROR,
  PROFILE_REQUEST_SUCCESS,
  ProfileRequestAction,
  ProfileRequestErrorAction,
  ProfileRequestSuccessAction
} from "./Profile/profileActions";
import {profileReducer} from "./Profile/profileReducer";
import {
  OPEN_ANSWER,
  OPEN_POST,
  OpenAnswerAction,
  OpenPostAction,
  SET_TOKEN,
  SetTokenAction,
  CLOSE_ANSWER,
  CloseAnswerAction,
  UPDATE_COMMENT,
  UpdateCommentAction,
  SUBMIT_COMMENT,
  SubmitCommentAction,
  TOGGLE_ROOM,
  ToggleRoomAction,
  UPDATE_SEARCH,
  UpdateSearchAction
} from "./actions";
import {IInitialState, initialState} from "./initialState";
import {
  SET_TIMEOUT_TEST,
  SetTimeoutTestAction,
  TIMEOUT_TEST_SUCCESS,
  TimeoutTestSuccessAction
} from "./TimeoutTest/timeoutTestActions";
import {timeoutTestReducer} from "./TimeoutTest/timeoutTestReducer";
import {
  IPost, POST_SEEN,
  POST_TOGGLE_SAVE,
  POSTCARD_TOGGLE_VISIBLE,
  PostCardToggleVisibleAction,
  POSTLIST_REQUEST,
  POSTLIST_REQUEST_ERROR,
  POSTLIST_REQUEST_SUCCESS,
  PostListRequestAction,
  PostListRequestErrorAction,
  PostListRequestSuccessAction, PostSeenACtion,
  PostToggleSaveACtion, SET_SOURCE, SetSourceAction
} from "./Posts/postsActions";
import {
  COMMENTS_REQUEST,
  COMMENTS_REQUEST_ERROR,
  COMMENTS_REQUEST_SUCCESS,
  CommentsRequestAction,
  CommentsRequestErrorAction,
  CommentsRequestSuccessAction, IComment
} from "./Comments/commentsActions";
import {postsReducer} from "./Posts/postsReducer";
import {commentsReducer} from "./Comments/commentsReducer";

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
  CommentsRequestAction |
  CommentsRequestSuccessAction |
  CommentsRequestErrorAction |
  PostToggleSaveACtion |
  PostSeenACtion |
  PostCardToggleVisibleAction |
  OpenPostAction |
  OpenAnswerAction |
  CloseAnswerAction |
  SetSourceAction |
  SubmitCommentAction |
  ToggleRoomAction |
  UpdateSearchAction |
  TimeoutTestSuccessAction;

export const rootReducer: Reducer<IInitialState, RootAction> = (state = initialState, action) => {
  switch (action.type) {
    case SET_TOKEN:
      return {
        ...state,
        token: action.token,
        isAuth: true,
      };
    case UPDATE_COMMENT:
      return {
        ...state,
        commentForm: action.comment
      };
    case UPDATE_SEARCH:
      return {
        ...state,
        searchInput: action.value
      };
    case SUBMIT_COMMENT:
      return {
        ...state,
        commentForm: ''
      };
    case TOGGLE_ROOM:
      return {
        ...state,
        isPrivate: !state.isPrivate
      };
    case OPEN_POST:
      const post = state.posts.list.find((item:IPost)=>item.id === action.postId)
      return {
        ...state,
        postModal: post
      };

    case OPEN_ANSWER:
      const comment = state.comments.list.find((item:IComment)=>item.id === action.commentId)
      return {
        ...state,
        commentModal: comment,
        isAnswerOpen: true,
      };
    case CLOSE_ANSWER:
      return {
        ...state,
        isAnswerOpen: false,
      };
    case PROFILE_REQUEST:
    case PROFILE_REQUEST_SUCCESS:
    case PROFILE_REQUEST_ERROR:
      return {
        ...state,
        profile: profileReducer(state.profile, action),
      };

    case COMMENTS_REQUEST:
    case COMMENTS_REQUEST_SUCCESS:
    case COMMENTS_REQUEST_ERROR:
      return {
        ...state,
        comments: commentsReducer(state.comments, action),
      };
    case POSTLIST_REQUEST:
    case POSTLIST_REQUEST_SUCCESS:
    case POSTLIST_REQUEST_ERROR:
    case POST_TOGGLE_SAVE:
    case POST_SEEN:
    case POSTCARD_TOGGLE_VISIBLE:
    case SET_SOURCE:
      return {
        ...state,
        posts: postsReducer(state.posts, action),
      };
    case SET_TIMEOUT_TEST:
    case TIMEOUT_TEST_SUCCESS:
      return timeoutTestReducer(state, action);

    default:
      return state;
  }
}