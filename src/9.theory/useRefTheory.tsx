// import React, {useEffect, useRef} from "react";
// import ReactDOM from "react-dom";
// import styles from "../shared/modals/CommentModal/commentModal.css";
//
// // function Input () {
// //   const myRef = useRef(null);
// //   return (
// //     <input type = 'text' ref = {myRef}/>
// //   )
// // }
//
// //Оправдано использование:
//
// // Управление фокусом inputRef.current.focus()
// // Выделение текста inputRef.current.select()
// // Воспроизведение медиа videoRef.current.play()
// // Императивный вызов анимаций ref.current.animate(...)
// // Интеграция со стор Dom-библиотеками videojs(ref.current)
//
//
// interface ICardModal {
//   onClose:()=>void;
//   id?: string;
// }
//
//
// //outside click. State is in <Title/>
// export function Modal({onClose, id}:ICardModal) {
//
//   const ref = useRef<HTMLDivElement>(null);//по умолчанию null; Теперь у обьекта есть св-во current в кот лежит ссылка на дом ноду модалки (указали в <div ref={ref}>) .
//
//   useEffect(()=>{//хук для прослушки клика outside. когда рендерится этот комп
//
//     function handleClick (event:MouseEvent){//смотрим куда ткнут клик. Выдаются дом элементы. Осталось только их отфильтровать с помощью рефа.
//       if(event.target instanceof Node && !ref.current?.contains(event.target)) {//Argument of type 'EventTarget | null' is not assignable to parameter of type 'Node | null'.
//         //  в этом условии мы точно знаем что клик был вне модалки
//         onClose?.()
//       }
//     }
//
//     document.addEventListener('click', handleClick);//вешаем клик на весь документ/окно/браузер
//     return () => document.removeEventListener('click', handleClick)//убрать этот функционал когда компонент закрыт/размонтирован.
//   },[])
//
//   const node = document.querySelector('#modal_root');//для рендера модалки в своем руте
//   if(!node) return null;//исправление типизации node|null на просто null.
//
//   return ReactDOM.createPortal((
//       <div className={styles.modalContainer} ref={ref}>
//         <div className={styles.modalBody}>
//           kjjk
//         </div>
//       </div>
//   ), node);//node только элемент без null.
// }
