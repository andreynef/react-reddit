// import React from 'react';
// import './main.global.css';
// import {hot} from "react-hot-loader/root";
// import {Layout} from "./shared/Layout";
// import {Content} from "./shared/Content";
// import {CardList} from "./shared/CardsList";
// import {Header} from "./shared/Header";
// import {useToken} from "./myHooks/useToken";
// import {tokenContext} from "./shared/context/tokenContext";
// import {PostsContextProvider} from "./shared/context/postsContext";

//Прога по генерации шаблонов компонент (установка: npm install -g yo generator-react-ts-component-dir):
//В консоли набрать: yo react-ts-component-dir BLABLAComp ./src/shared. Пример 'yo react-ts-component-dir [component_name] [path] [--styles] [--less] [--sass]'


// function AppComponent() {
//   const [token] = useToken();//теперь есть токен на клиенте (записан в window.__token__). Далее прокидываем его в пропсы нужн компонентов, либо напрямую используя контекст оборачивая в Provider.
//   // const {Provider} = tokenContext;//создаем контекст и оборачиваем все содержимое App в Provider. Либо создаем свой на основе него.
//   return (
//     <tokenContext.Provider value={token}>{/*токен контекст для всех компонентов*/}
//       <Layout>
//         <Header/>
//         <Content>
//           <PostsContextProvider>
//             <CardList/>
//           </PostsContextProvider>
//         </Content>
//         {/*<CommentFormContainer isOpen={false} id={'some post id'}/>*/}
//       </Layout>
//     </tokenContext.Provider>
//   );
// }

// export const App = hot(()=> <AppComponent/>);// HOC. Если используются Hooks, тобишь UseState итд
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
