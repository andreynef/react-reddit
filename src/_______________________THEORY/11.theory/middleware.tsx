// import {applyMiddleware, createStore, Middleware} from "redux";
// import {composeWithDevTools} from "redux-devtools-extension";
// import {rootReducer} from "../Redux/store";
//
//
// const logger:Middleware = (store)=>(next)=>(action)=>{//такая конструкция Middleware. Деиствия справа налево.
//   console.log('dispatching first action:', action)//первое действие
//   next(action)//следующее действие
//   console.log('dispatching next action:', next({...action, name: 'NAME'}));
// }
//
// const ping:Middleware = (store)=>(next)=>(action)=>{
//   console.log('ping')
// }
// const pong:Middleware = (store)=>(next)=>(action)=>{
//   console.log('pong')
// }
//
// const storee = createStore(rootReducer, composeWithDevTools(
//   applyMiddleware(logger, ping, pong)//несколько мидлов
// ));

//с помощью middleware можно:
//взаимодействие с роутером (экшены переключающие адрес в строке)
//сходить в API (экшн запроса взять чтото с апи)
//диспатчить ф или промис
//thunk библиотека