import {Reducer} from "redux";
import {
  PROFILE_REQUEST,
  PROFILE_REQUEST_ERROR, PROFILE_REQUEST_SUCCESS,
  ProfileRequestAction,
  ProfileRequestErrorAction,
  ProfileRequestSuccessAction
} from "./profileActions";
import {RootStateOrAny} from "react-redux";

type ProfileActions =
  ProfileRequestSuccessAction |
  ProfileRequestAction |
  ProfileRequestErrorAction;

export const profileReducer: Reducer<RootStateOrAny, ProfileActions> = (state, action) => {
  switch (action.type) {

    case PROFILE_REQUEST:
      return {
        ...state,
        loading: true
      };

    case PROFILE_REQUEST_SUCCESS:
      return {
        ...state,
        data: action.data,
        loading: false,
        isAuth: true,
      };

    case PROFILE_REQUEST_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    default:
      return state;
  }
}