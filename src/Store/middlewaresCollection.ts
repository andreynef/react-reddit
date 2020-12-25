import {Action, Middleware} from "redux";
import {ThunkAction} from "redux-thunk";
import {IInitialState} from "./initialState";
//------------------------------------------------------------------------------------------
export const logger:Middleware = (store)=>(next)=>(action)=>{//такая конструкция Middleware. Деиствия справа налево.
  console.log('dispatching first action:', action)//первое действие
  next(action)//следующее действие
  console.log('dispatching next action:', next({...action, name: 'NAME'}));
}
//------------------------------------------------------------------------------------------
export const ping:Middleware = (store)=>(next)=>(action)=>{
  console.log('ping')
  next(action)
}
//------------------------------------------------------------------------------------------
export const pong:Middleware = (store)=>(next)=>(action)=>{
  console.log('pong')
  next(action)
}
//------------------------------------------------------------------------------------------
export const timeout = (ms:number):ThunkAction<void, IInitialState, unknown, Action>=>(dispatch, _getState)=>{//типизация из документации
  dispatch({type:'START'});

  setTimeout(()=>{
    dispatch({type:'FINISH'});
  },ms);
}
//------------------------------------------------------------------------------------------
