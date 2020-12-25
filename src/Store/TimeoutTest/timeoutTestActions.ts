//----------timeout TEST---------------------

import {Action, ActionCreator} from "redux";
import {ThunkAction} from "redux-thunk";
import {IinitialState} from "../initialState";

export const SET_TIMEOUT_TEST = 'SET_TIMEOUT_TEST'
export const TIMEOUT_TEST_SUCCESS = 'TIMEOUT_TEST_SUCCESS'

export type SetTimeoutTestAction = {
  type: typeof SET_TIMEOUT_TEST ;
}

export type TimeoutTestSuccessAction = {
  type: typeof TIMEOUT_TEST_SUCCESS ;
}

export const setTimeoutTestAC: ActionCreator<SetTimeoutTestAction> = () => ({
  type: SET_TIMEOUT_TEST,
});
export const timeoutTestSuccessAC: ActionCreator<TimeoutTestSuccessAction> = () => ({
  type: TIMEOUT_TEST_SUCCESS,
});

export const timeoutTestThunk = ():ThunkAction<void, IinitialState, unknown, Action>=>(dispatch, getState)=> {//типизация из документации
  dispatch(setTimeoutTestAC())
  console.log('timeout started')
  setTimeout(()=>{
    dispatch(timeoutTestSuccessAC());
    console.log('timeout finished')
  },3000);
}

