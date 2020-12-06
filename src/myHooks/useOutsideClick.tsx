import React, {useEffect} from "react";

interface IModal {
  onClose:()=>void;
  ref: React.RefObject<HTMLDivElement>
}

export function useOutsideClick({ref, onClose}:IModal) {

  useEffect(()=>{//хук для прослушки клика outside. когда рендерится этот комп
    document.addEventListener('click', handleClick);//вешаем клик на весь документ/окно/браузер
    return () => document.removeEventListener('click', handleClick)
  },[ref, onClose])

  function handleClick (event:MouseEvent){//смотрим куда ткнут клик. Выдаются дом элементы. Осталось только их отфильтровать с помощью рефа.
    console.log('clicked on:', event.target);
    console.log('ref on    :', ref.current);

    if(event.target instanceof Node && !ref.current?.contains(event.target)) {// "?" - fix: Object is possibly 'null'.
      //  в этом условии мы точно знаем что клик был вне модалки
      console.log('clicked outside!!! Closing modal')
      onClose?.()
    }
  }
}

// if (!ref.current || ref.current.contains(event.target)) {
//   return;
// }
// handler(event);
// };


//-----------------focus--------------------
// const onButtonClick = () => {
//   // strict null checks need us to check if inputEl and current exist.
//   // but once current exists, it is of type HTMLInputElement, thus it
//   // has the method focus! ✅
//   if(inputEl && inputEl.current) {
//     inputEl.current.focus();
//   }
// };