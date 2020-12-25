import React, {useEffect, useRef} from 'react';
import styles from './answerForm.css';
import {useOutsideClick} from "../../../../myHooks/useOutsideClick";
import {preventDefault} from "../../../../utils/react/preventDefault";
import {stopPropagation} from "../../../../utils/react/stopPropagation";

interface IAnswerForm {
  name:string
  onClose:()=>void;
}

//-----------------------local unControlled-------------------------

export function AnswerLocalModal({name, onClose}:IAnswerForm) {

  const refTextArea = useRef<HTMLTextAreaElement>(null);//для фокуса
  const ref = useRef<HTMLFormElement>(null);//для клика снаружи
  useOutsideClick(ref, onClose);

  useEffect(()=>{//при рендере устанавливается фокус
    if(refTextArea.current) {//избежание null ошибки
      refTextArea.current.focus();
    }
  },[])

  const handleSubmit = ()=>{
    alert(`submitting: "${refTextArea.current?.value}"`)
    onClose();
  }

  return (
      <form ref={ref} className={styles.answerForm} method={'post'} onSubmit={preventDefault(stopPropagation(handleSubmit))}>
        <textarea ref={refTextArea} className={styles.answerTextArea} placeholder={`${name}, оставьте ваш комментарий`}/>
        <button type='submit' className={styles.answerButton}>Ответить</button>
      </form>
  );
}

















//-----------------------------------------------------------------------------------------
// //-----------------------local controlled-------------------------
//
// export function AnswerModalLocalControlled({name, onClose}:IAnswerForm) {
//
//   const [value, setValue] = useState('');
//
//   //--------для фокуса при рендере----------
//   const refTextArea = useRef<HTMLTextAreaElement>(null);
//   useEffect(()=>{//при рендере устанавливается фокус
//     if(refTextArea && refTextArea.current) {//избежание null ошибки
//       refTextArea.current.focus();
//     }
//   },[])
//   //----------------------------------------
//
//   //--------для клика снаружи----------
//   const ref = useRef<HTMLDivElement>(null);
//   useOutsideClick(ref, onClose);
//   //-----------------------------------
//
//
//   const handleSubmit = (event:FormEvent)=>{
//     alert(`submitting: "${value}"`)
//     onClose();
//   }
//
//   return (
//     <div className={styles.answerBacksideContainer}>
//       <div className={styles.answerBodyContainer} ref={ref}>
//         <form className={styles.answerForm} method={'post'} onSubmit={preventDefault(stopPropagation(handleSubmit))}>
//           <textarea ref={refTextArea} className={styles.answerTextArea} placeholder={`${name}, оставьте ваш комментарий`} value={value} onChange={(event)=>setValue(event.target.value)}/>
//           <button type='submit' className={styles.answerButton}>Ответить</button>
//         </form>
//       </div>
//     </div>
//   );
// }

//-----------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------


//
//
// //----------------------portal controlled-----------------------------------------------
//
// export function AnswerModalPortalControlled({name, onClose}:IAnswerForm) {
//
//   const [value, setValue] = useState('');
//
//   //--------для фокуса при рендере----------
//   const refTextArea = useRef<HTMLTextAreaElement>(null);
//   useEffect(()=>{//при рендере устанавливается фокус
//     if(refTextArea && refTextArea.current) {//избежание null ошибки
//       refTextArea.current.focus();
//     }
//   },[])
//   //----------------------------------------
//
//   //--------для клика снаружи----------
//   const ref = useRef<HTMLDivElement>(null);
//   useOutsideClick(ref, onClose);
//   //-----------------------------------
//
//   const handleSubmit = (event:FormEvent)=>{
//     alert(`submitting: "${value}"`)
//     onClose();
//   }
//
//   //----------для рендера в портал----------
//   const node = document.querySelector('#modal_root');
//   if(!node) return null;
//   //----------------------------------------
//
//   return ReactDOM.createPortal((
//     <div className={styles.answerBacksideContainer}>
//       <div className={styles.answerBodyContainer} ref={ref}>
//         <form className={styles.answerForm} method={'post'} onSubmit={preventDefault(stopPropagation(handleSubmit))}>
//           <textarea ref={refTextArea} className={styles.answerTextArea} placeholder={`${name}, оставьте ваш комментарий`} value={value} onChange={(event)=>setValue(event.target.value)}/>
//           <button type='submit' className={styles.answerButton}>Ответить</button>
//         </form>
//       </div>
//     </div>
//   ), node);
// }
//
// //----------------------portal unControlled-----------------------------------------------
//
// export function AnswerModalPortalUncontrolled({name}:IAnswerForm) {
//
//   const refTextArea = useRef<HTMLTextAreaElement>(null);
//
//   useEffect(()=>{//при рендере устанавливается фокус
//     if(refTextArea && refTextArea.current) {//избежание null ошибки
//       refTextArea.current.focus();
//     }
//   },[])
//
//   const handleSubmit = (event:React.FormEvent<HTMLFormElement>)=>{
//     event.preventDefault();
//     console.log('submitting:', event.currentTarget.value)
//   }
//
//   //----------для рендера в портал----------
//   const nodePortal = document.querySelector('#modal_root');
//   if(!nodePortal) return null;
//   //----------------------------------------
//
//   return ReactDOM.createPortal((
//     <div className={styles.modalContainer}>
//       <div className={styles.modalBody}>
//         <form method={'post'} className={styles.container} onSubmit={handleSubmit}>
//           <textarea ref={refTextArea} className={styles.textContainer2} placeholder={`${name}, оставьте ваш комментарий`}/>
//           <div className={styles.panelWithButtonContainer}>
//             <button className={styles.button}>Ответить</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   ), nodePortal);
// }