import {Reducer} from "redux";
import {
  SET_TIMEOUT_TEST,
  SetTimeoutTestAction, TIMEOUT_TEST_SUCCESS, TimeoutTestSuccessAction
} from "./timeoutTestActions";
import {RootStateOrAny} from "react-redux";

type TimeoutActions =
  SetTimeoutTestAction |
  TimeoutTestSuccessAction;

export const timeoutTestReducer: Reducer<RootStateOrAny, TimeoutActions> = (state, action) => {
  switch (action.type) {

    case SET_TIMEOUT_TEST:
      return {
        ...state,
        timeout: true
      };

    case TIMEOUT_TEST_SUCCESS:
      return {
        ...state,
        timeout: false
      };

    default:
      return state;
  }
}