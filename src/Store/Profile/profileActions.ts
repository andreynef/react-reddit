import {Action, ActionCreator} from "redux";
import {ThunkAction} from "redux-thunk";
import axios from "axios";
import {IinitialState} from "../initialState";

export const PROFILE_REQUEST = 'PROFILE_REQUEST';
export const PROFILE_REQUEST_SUCCESS = 'PROFILE_REQUEST_SUCCESS';
export const PROFILE_REQUEST_ERROR = 'PROFILE_REQUEST_ERROR';

export type ProfileRequestAction = {
  type: typeof PROFILE_REQUEST ;
}
export type ProfileRequestSuccessAction = {
  type: typeof PROFILE_REQUEST_SUCCESS ;
  data: IUserData,
}
export type ProfileRequestErrorAction = {
  type: typeof PROFILE_REQUEST_ERROR ;
  error: string,
}

export interface IUserData {
  name?: string;
  avaUrl?: string;
}

export const profileRequestAC: ActionCreator<ProfileRequestAction> = () => ({
  type: PROFILE_REQUEST,
});

export const profileRequestSuccessAC: ActionCreator<ProfileRequestSuccessAction> = (data:IUserData) => ({
  type: PROFILE_REQUEST_SUCCESS,
  data,
});

export const profileRequestErrorAC: ActionCreator<ProfileRequestErrorAction> = (error:string) => ({
  type: PROFILE_REQUEST_ERROR,
  error,
});

// Thunk: запроc данных в Reddit о юзере -> успех или ошибка

export const profileRequestThunk = ():ThunkAction<void, IinitialState, unknown, Action>=>(dispatch, getState)=> {//типизация из документации
  dispatch(profileRequestAC())
  axios.get('https://oauth.reddit.com/api/v1/me',{
    headers:{Authorization: `bearer ${getState().token}`}//достать из стора либо прокинуть его сверху.
  })
    .then((resp)=>{
      dispatch(profileRequestSuccessAC({name:resp.data.name, avaUrl:resp.data.icon_img.split("?")[0]}))//ловим ответ и диспатчим только нужные данные. Подробности в доке www.reddit.com/dev/api/oauth
    })
    .catch((error)=>{
      console.log("error from request:",error);
      dispatch(profileRequestErrorAC(String(error)))
    })
}

