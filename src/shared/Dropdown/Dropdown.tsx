//универсальный компонент-шаблон с логикой DropdownNoAbsolute. Контейнер с 2мя блоками (на что жать и что выпадает). Без стилей, только логика.

import React, {EventHandler, useEffect, useRef, useState} from 'react';
import styles from './dropdown.css';
import {Portal} from "../../utils/Portal";
import {useHistory} from "react-router-dom";
import {useOutsideClick} from "../../myHooks/useOutsideClick";
import {
  disableBodyScroll,
  enableBodyScroll,
  hiddenBodyScroll,
  visibleBodyScroll
} from "../../utils/react/scrollBlocker";

const NOOP = () => {};//ф кот ничего не делает. Обертка.

interface IDropdownProps {
  button: React.ReactNode;//на что жмем
  children: React.ReactNode;//что будет выпадать
  isOpen?: boolean;//нужен для контроля "сверху"
  onOpen?: ()=> void;//нужен для контроля "сверху". Listeners.
  onClose?: ()=> void;//нужен для контроля "сверху". Listeners.
  isInline?:boolean;
  local?:boolean;
  classNameContainer?:string;
  classNameButton?:string;
  classNameChildrenContainer?:string;
  arrowIcon?:React.ReactNode;
}

export function Dropdown ({button, children, isOpen, onClose=NOOP, onOpen=NOOP, isInline=false, local=false, arrowIcon, classNameButton, classNameContainer, classNameChildrenContainer}: IDropdownProps) {

  const [isDropdownOpen, setIsDropdownOpen] = useState(isOpen);
  const [x, setX] = useState('');
  const [y, setY] = useState('');

  useEffect(()=> {//отвечает за приходящий сверху стейт откр/закр
    setIsDropdownOpen(isOpen)
  }, [isOpen]);

  useEffect(()=> {//нажатие много раз кнопку меню - вкл/выкл.
    isDropdownOpen ? onOpen() : onClose()
    }, [isDropdownOpen]);

  const handleOpen =(e:any)=>{
    // if (isOpen === undefined) {
      setIsDropdownOpen(!isDropdownOpen)
    // }
    setX(e.target.getBoundingClientRect().x)//установка координат клика -> рендер привязан к стейту: рендер там где установлены координаты
    setY(e.target.getBoundingClientRect().y)
  }
  const handleClose =()=>{
    setIsDropdownOpen(false)
  }

  //--------для клика снаружи----------
  const ref = useRef<HTMLDivElement>(null);
  useOutsideClick(ref, ()=>{setIsDropdownOpen(false)});
  //-----------------------------------

  return (
    <div className={classNameContainer} ref={ref}>{/*сам элемент в основном потоке*/}
      <button onClick={handleOpen} className={classNameButton} style={isDropdownOpen ? {borderBottomRightRadius:'0', borderBottomLeftRadius:'0'}:{}}>
        {button}
        <div style={{transform:isDropdownOpen?'rotate(180deg)':'unset'}}>{arrowIcon}</div>
      </button>

      {isDropdownOpen && !local &&(
        <Portal
          children={
            <div style={{position:'fixed', top:`${y}px`, left:`${x}px`, zIndex:100}} onClick={handleClose} className={classNameChildrenContainer}>
              {children}
            </div>
          }
          />
      )}
      {isDropdownOpen && local &&(
        <div onClick={handleClose} className={classNameChildrenContainer}>
          {children}
        </div>
      )}
    </div>
  );
}

// interface IDropChild {
//   children: React.ReactNode;
// }
//
// const DropDownChildren = ({children}:IDropChild)=>{
//   const [node] = usePortalZone();
//   if(!node) return null;
//
//   return ReactDOM.createPortal((
//     {children}
//     ), node)
// }

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
