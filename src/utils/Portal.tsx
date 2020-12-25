import React from "react";
import ReactDOM from "react-dom";
import {usePortalZone} from "../myHooks/usePortalZone";

interface IPortal {
  children?: JSX.Element;
}

export function Portal({children}: IPortal) {//чисто выводит в портал. Без стилей.

  // const node = document.querySelector('#modal_root');
  const [node] = usePortalZone();
  if(!node) return null;

  return ReactDOM.createPortal((<>{children}</>), node);
}

























//было
// interface IPortal {
//   children?: JSX.Element;
//   // onClose:()=>void;
// }
//
// export function Portal({children}: IPortal) {//компонент кот может рендерить любые списки.
//
//   useEffect(()=>{//блокиратор скролла. Render - on, unRender - off.
//     disableBodyScroll({ savePosition: true })
//     console.log('scroll blocked')
//     return ()=>{
//       enableBodyScroll()
//       console.log('scroll unlocked')
//     }
//   },[])
//
//
//   //--------для клика снаружи----------
//   const history = useHistory();
//   const ref = useRef<HTMLDivElement>(null);
//   useOutsideClick(ref, ()=>{history.push('/')});
//   //-----------------------------------
//
//   //----------для рендера в портал----------
//   // const node = document.querySelector('#modal_root');
//   const [node] = usePortalZone();
//   if(!node) return null;
//   //----------------------------------------
//
//   return ReactDOM.createPortal((
//     <div style={{//задний фон щиток против кликов насквозь
//       position: 'fixed',
//       top: 0,
//       bottom: 0,
//       left: 0,
//       right: 0,
//       display: 'flex',
//       justifyContent: 'center',
//       zIndex: 100,
//       width:'100%',
//       backgroundColor: 'rgba(0,0,0,0.3)',
//     }}
//     >
//       <div ref={ref}>{/*обертка для модалки за кот следит useOutsideClick*/}
//         {children}
//       </div>
//     </div>
//   ), node);
// }
