//универсальный компонент-шаблон DropdownNoAbsolute. Контейнер с 2мя блоками (на что жать и что выпадает)
import React, {useEffect, useState} from 'react';
import styles from './dropdown.css';

interface IDropdownTheoryProps {
  button: React.ReactNode;//на что жмем
  children: React.ReactNode;//что будет выпадать
  isOpen?: boolean;//нужен для контроля "сверху"
  onOpen?: ()=> void;//нужен для контроля "сверху". Listeners.
  onClose?: ()=> void;//нужен для контроля "сверху". Listeners.
  isInline?:boolean;
}

const NOOP = () => {};//ф кот ничего не делает. Обертка.

export function DropdownTheory({button, children, isOpen, onClose=NOOP, onOpen=NOOP, isInline=false}: IDropdownTheoryProps) {//ф onClose и onOpen всегда в наличии благодаря NOOP обертке. Тоесть если сверху не переданы пропсы этих методов то ставятся заглушки ничего не вы полняющие.
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(isOpen);//начальное состояние указаное "сверху".

  React.useEffect(()=> setIsDropdownOpen(isOpen),[isOpen]);//установка слушателя состояния isOpen. Изменился isOpen -> установил State.
  React.useEffect(()=> isDropdownOpen ? onOpen() : onClose(),[isDropdownOpen]);//для активации колбэков. Установка слушателя состояния isDropdownOpen. Изменился isDropdownOpen -> запуск того или иного колбэка. Выполнится при первом рендере.

  const handleOpen =()=>{
    if (isOpen === undefined) {//если в компоненте для рендера не указан атрибут isOpen то действие по умолчанию - установка State противоположное isDropdownOpen.
      setIsDropdownOpen(!isDropdownOpen)
    }
  }

  return (
    <div className={styles.container}>{/*общ контейнер*/}
      <div onClick={handleOpen}>{/*handler на переключение объекта*/}
        {button}
      </div>

      {isDropdownOpen && (
        <div className={styles.listContainer}>{/*контейнер для нашего списка кот рендерится при условии isDropdownOpen*/}
          <div className={styles.list} onClick={()=>setIsDropdownOpen(false)}>{/*сам список. Закрывается при нажатии*/}
            {children}
          </div>
        </div>
      )}
    </div>
  );
}

// export function DropdownTest({button, children, isOpen, onClose=NOOP, onOpen=NOOP, isInline=false}: IDropdownProps) {//ф onClose и onOpen всегда в наличии благодаря NOOP обертке. Тоесть если сверху не переданы пропсы этих методов то ставятся заглушки ничего не выполняющие.
//   const divRef = React.useRef<HTMLDivElement>(null);
//   // State for our modal
//   const [isModalOpen, setModalOpen] = useState(false);
//   // Call hook passing in the ref and a function to call on outside click
//   useOnClickOutside(ref, () => setModalOpen(false));
//
//   return (
//     <div style={{ padding: '50px' }}>
//       {isModalOpen ? (
//         <div ref={divRef}>
//           <span>Hey, I'm a modal<br /> Click anywhere outside of me to close</span>
//         </div>
//       ) : (
//         <button onClick={() => setModalOpen(true)}>Open Modal</button>
//
//       )}
//     </div>
//   );
// }
//
// function useOnClickOutside(ref, handler) {
//   useEffect(
//     () => {
//       const listener = event => {
//         // Do nothing if clicking ref's element or descendent elements
//         if (!ref.current || ref.current.contains(event.target)) {
//           return;
//         }
//
//         handler(event);
//       };
//
//       document.addEventListener('mousedown', listener);
//       document.addEventListener('touchstart', listener);
//
//       return () => {
//         document.removeEventListener('mousedown', listener);
//         document.removeEventListener('touchstart', listener);
//       };
//     },
//     // Add ref and handler to effect dependencies
//     // It's worth noting that because passed in handler is a new ...
//     // ... function on every render that will cause this effect ...
//     // ... callback/cleanup to run every render. It's not a big deal ...
//     // ... but to optimize you can wrap handler in useCallback before ...
//     // ... passing it into this hook.
//     [ref, handler]
//   );
// }
//
//
//
//
// const modalStyle = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   maxWidth: '400px',
//   width: '100%',
//   padding: '50px',
//   textAlign: 'center',
//   fontSize: '1.2rem',
//   backgroundColor: 'white',
//   boxShadow: '0 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1)'
// };

// function ClickOutside({ children, onClick }) {
//   const refs = React.Children.map(children, () => React.createRef());
//   const handleClick = e => {
//     const isOutside = refs.every(ref => {
//       return !ref.current.contains(e.target);
//     });
//     if (isOutside) {
//       onClick();
//     }
//   };
//
//   useEffect(() => {
//     document.addEventListener("click", handleClick);
//
//     return function() {
//       document.removeEventListener("click", handleClick);
//     };
//   });
//
//   return React.Children.map(children, (element, idx) =>
//     React.cloneElement(element, { ref: refs[idx] })
//   );
// }
