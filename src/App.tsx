import React, {useEffect, useState} from 'react';
import './main.global.css';
import {hot} from "react-hot-loader/root";
import {Layout} from "./shared/Layout";
import {Content} from "./shared/Content";
import {CardList} from "./shared/CardsList";
import {Header} from "./shared/Header";
import {useToken} from "./myHooks/useToken";
import {PostsContextProvider} from "./shared/context/postsContext";
import {Provider, useDispatch, useSelector, useStore} from 'react-redux';
import {createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {rootReducer, RootState} from "./Redux/store";
import {setToken} from "./Redux/actions/actionCreator";

//Прога по генерации шаблонов компонент (установка: npm install -g yo generator-react-ts-component-dir):
//В консоли набрать: yo react-ts-component-dir BLABLAComp ./src/shared. Пример 'yo react-ts-component-dir [component_name] [path] [--styles] [--less] [--sass]'

const store = createStore(rootReducer, composeWithDevTools());//composeWithDevTools для соединения стора с хромовским расширением Redux чтобы зыркать все что с происходит со стором.

function AppComponent() {
  const [token] = useToken();//достать токен из window.__token__ (записан после авторизации).
  const dispatch = useDispatch();//вызывается внутри компонента обернутого в <Provider>, поэтому в hot.
  dispatch(setToken(token));//запрос на установку токена в стор

  return (
      <Layout>
        <Header/>
        <Content>
          <PostsContextProvider>
            <CardList/>
          </PostsContextProvider>
        </Content>
      </Layout>
  );
}

export const App = hot(()=>// HOC. Если используются Hooks, тобишь UseState итд
  <Provider store={store}>
    <AppComponent/>
  </Provider>

);
// export const App = hot(AppComponent);//если не используются Hooks.



















// {/*<DropdownNoAbsolute*/}
// {/*  onClose={()=>console.log('closed!!!')}//слушатели. Если закрыт то выполнить это.*/}
// {/*  onOpen={()=>console.log('opened!!!')}*/}
// {/*  // isOpen={false}//можно передать изначальное состояние*/}
// {/*  button={<button>dropdown button</button>}*/}
// // {/*>/!* Контейнер с логикой дропа *!/*/}
// {/*  <p>text1</p>/!*children*!/*/}
// {/*  <p>text2</p>/!*children*!/*/}
// {/*  <p>text3</p>/!*children*!/*/}
// {/*  <p>text4</p>/!*children*!/*/}
// </DropdownNoAbsolute>
// <Icon size={20} mobileSize={28} color={EColors.green} bold>Label1</Icon>
// <Break size={8} inline mobileSize={16}/>
// <Icon size={20}>Label2</Icon>
// <Break size={8} top/>
// <Icon size={20} mobileSize={10}>Label3</Icon>
