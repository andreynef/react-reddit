import React from 'react';
import {hot} from "react-hot-loader/root";
import {Provider} from 'react-redux';
import {createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {rootReducer} from "./storeTheory";

// npm i --save redux-devtools-extension
// npm i react-redux
// npm i redux
// npm i @types/react-redux

const store = createStore(rootReducer, composeWithDevTools());//composeWithDevTools для соединения стора с хромовским расширением Redux чтобы зыркать все что с происходит со стором.

function Appppp() {
  return (
    <Provider store={store}>
      content
    </Provider>
  );
}

export const App = hot(()=> <Appppp/>);
