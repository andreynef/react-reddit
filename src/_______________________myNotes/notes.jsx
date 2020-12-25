// //скрольная тема, отображение пикселей от высоты скролла. Вешается там где overscroll.
// import React from "react";
// import "./styles.css";
//
// export default function App() {
//   const ref = React.useRef(null);
//   const handleScroll = () => {
//     if (ref.current) {
//       console.log(ref.current.scrollHeight)
//       console.log(ref.current.scrollTop)
//       console.log('scrolled in px ', ref.current.scrollHeight - (ref.current.scrollHeight - ref.current.scrollTop))
//     }
//   }
//
//   return (
//     <div ref={ref} className="App" onScroll={handleScroll}>
//       <div  className="content">
//         <h1>Hello CodeSandbox</h1>
//         <h2>Start editing to see some magic happen!</h2>
//       </div>
//     </div>
//   );
// }
// //-----------------

// ответ-Intersection Observer API. вопрос-по классу элемента, нужно узнать его положение и скроллом отследить его



//
//
// //Товарищи, проблемка с валидацией формы при вводе, походу запись в стейт асинхронная, и при вводе валидация запаздывает на один символ, как решить данную проблему?
//
// const handleChangeLogin = (ev) => {
//   setLogin(ev.target.value);
//   console.log(login) //выводит предыдущее значение login
//   setLoginError(validateLogin());
// }
//
// //Если кому надо, разобрался. Нужно валидацию запихнуть в useEffect, только не вызывать ее при первом рендере.
// useEffect(() => {
//   //не используем валидацию при первом рендере
//   if (firstRender.current) {
//     firstRender.current = false;
//     return;
//   }
//   if (login) {
//     setLoginError(validateLogin());
//   }
//   if (pass) {
//     setPassError(validatePass());
//   }
// }, [login, pass, validateLogin, validatePass])
//
//
//

// фильтрация по массиву

// let data = [
//   {"title" : "фильм1", "tags" : ["драма", "мистика"]},
//   {"title" : "фильм2", "tags" : ["драма", "боевик", "бубу"]},
//   {"title" : "фильм3", "tags" : ["ужасы", "боевик"]}
// ];
//
// let selectedTags = ["боевик", "бубу"];
//
// let result = data.filter( item => selectedTags.every( otherItem => item.tags.includes(otherItem) ) );// или some
//
// console.log( result );