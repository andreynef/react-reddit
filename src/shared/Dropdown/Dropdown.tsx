//универсальный компонент-шаблон с логикой DropdownNoAbsolute. Контейнер с 2мя блоками (на что жать и что выпадает). Без стилей, только логика.

import React, {useEffect, useState} from 'react';
import styles from './dropdown.css';
import {CrossIcon} from "../Icons";
import ReactDOM from "react-dom";
import { usePortalZone } from '../../myHooks/usePortalZone';
import {CardModal} from "../modals/CardModal";

const NOOP = () => {};//ф кот ничего не делает. Обертка.

interface IDropdownProps {
  button: React.ReactNode;//на что жмем
  children: React.ReactNode;//что будет выпадать
  isOpen?: boolean;//нужен для контроля "сверху"
  onOpen?: ()=> void;//нужен для контроля "сверху". Listeners.
  onClose?: ()=> void;//нужен для контроля "сверху". Listeners.
  isInline?:boolean;
}

export function Dropdown ({button, children, isOpen, onClose=NOOP, onOpen=NOOP, isInline=false}: IDropdownProps) {

  const [isDropdownOpen, setIsDropdownOpen] = useState(isOpen);

  useEffect(()=> {
    setIsDropdownOpen(isOpen)
    // console.log('setting local state to what comes from store. Deps:[storeState]')
  },//отвечает за приходящий сверху стейт откр/закр
    [isOpen]);

  useEffect(()=> {
    isDropdownOpen ? onOpen() : onClose()
      // console.log('doing smth depending on local state. Deps:[localState]')
    },//отвечает за локальный стейт копирующий состояние сверху.
    [isDropdownOpen]);

  const handleOpen =()=>{
    if (isOpen === undefined) {
      setIsDropdownOpen(!isDropdownOpen)
    }
  }

  //----------для рендера в портал----------
        const [node] = usePortalZone();
        if(!node) return null;
  //----------------------------------------

  return (
    <div className={styles.dropdownContainer}>
      <div onClick={handleOpen}>
        {button}
      </div>

      {isDropdownOpen && (
            <div className={styles.listContainer}>
              {
                ReactDOM.createPortal((
                  <div className={styles.list} onClick={()=>setIsDropdownOpen(false)}>
                    {children}
                  </div>
                ), node)
              }
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
