//Прога по генерации шаблонов компонент (установка: npm install -g yo generator-react-ts-component-dir):
//В консоли набрать: yo react-ts-component-dir NameOfComp ./src/shared. Пример 'yo react-ts-component-dir [component_name] [path] [--styles] [--less] [--sass]'

import React, {useEffect} from 'react';
import './main.global.css';
import {hot} from "react-hot-loader/root";
import {Layout} from "./shared/Layout";
import {Content} from "./shared/Content";
import {CardList} from "./shared/CardsList";
import {Header} from "./shared/Header";
// import {PostsContextProvider} from "./shared/context/postsContext";
import {Provider, useSelector} from 'react-redux';
import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {setTokenAC} from "./Store/actions";
import thunk from "redux-thunk";
import {rootReducer} from "./Store/rootReducer";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {useIsMounted} from "./myHooks/useIsMounted";
import {PostModal} from "./shared/modals/PostModal";
import {AnswerModal} from "./shared/modals/AnswerModal";
import {AnswerLocalModal} from "./shared/modals/PostModal/PostFull/AnswerForm";
import {IInitialState} from "./Store/initialState";
import {CardListBookmark} from "./shared/CardsListBookmark";
//doc in reactrouter.com


const store = createStore(//1арг reducer, 2арг action.
  rootReducer, //reducer
  composeWithDevTools(//expanded action. Добавляет доп возможности (по умолчанию соединение с хромовским расширением Store)
    applyMiddleware(thunk),
  )
)

function AppComponent() {//макс начало где можно испть токен.

  useEffect(()=>{//походу авторизация кажд раз свежая и поэтому ошибка 401 если сохранять токен в localStorage.
    //---------либо------
    // const token = localStorage.getItem('reddit_token') || window.__token__;
    // if(token) {
    //   console.log('window token:',window.__token__);
    //   store.dispatch(setTokenAC(token));//при монтаже - установка токена в стор.
    //   localStorage.setItem('reddit_token', token)
    // }
    //---------либо------
    // store.dispatch(setTokenAC('712161124719-hbTeTZ8YsiSKCEKq4QTW3ZX5O8XkKA'));
    //---------либо------
    const token = window.__token__;//'undefined' or '712161124719-hbTeTZ8YsiSKCEKq4QTW3ZX5O8XkKA'
    console.log('window.__token__:',window.__token__)
    if(token!=='undefined'){
      store.dispatch(setTokenAC(token));
    }
  },[])

  const [isMounted, setIsMounted] = React.useState(false);
  useEffect(()=> {
    setIsMounted(true);
  }, [])
  return (
    <Provider store={store}>
      {isMounted && (//только на клиенте тк на сервере браузера нет. Гибрид через Static router итд.
        <BrowserRouter>

          <Layout>
            <Header/>
            <Content>
              <Route exact path={"/"}>
                 <CardList/>
              </Route>
              <Route path={"/auth/"}>
                 <CardList/>
              </Route>
              {/*<Route path={["/saved"]}>*/}
              {/*  <CardListBookmark/>*/}
              {/*</Route>*/}
              {/*<Route path={'/seen'}>*/}
              {/*  <CardListBookmark/>*/}
              {/*</Route>*/}
              {/*<Route path={'/commented'}>*/}
              {/*  <CardListBookmark/>*/}
              {/*</Route>*/}
              {/*<Route path={'/myposts'}>*/}
              {/*  <CardListBookmark/>*/}
              {/*</Route>*/}
            </Content>
            <Route path={'/post/:id'}>
              <PostModal/>
            </Route>
            {/*<Route exact path={"/post/:id"}*/}
            {/*       render={(props) =>*/}
            {/*         <PostModal*/}
            {/*           item={itemsArr.find(item => item.id === props.match.params.id)}//фильтр того айди из сущ списка. Роутер передает проп match.params*/}
            {/*         />*/}
            {/*       }*/}
            {/*/>*/}
          </Layout>
        </BrowserRouter>
      )}
    </Provider>
  );
}

export const App = hot(()=>// HOC. Если используются Hooks, тобишь UseState итд
    <AppComponent/>
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




