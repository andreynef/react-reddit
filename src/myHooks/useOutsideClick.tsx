import React, {useEffect} from "react";

export function useOutsideClick(ref:React.RefObject<HTMLDivElement>|React.RefObject<HTMLFormElement>, onClose:()=>void) {//при монтаже накинуть слуш. Демонтаж - снять слуш.

  useEffect(()=>{//хук для прослушки клика outside. когда рендерится этот комп
    // console.log('in useOutsideClick. Hanging listener on document');
    document.addEventListener('click', handleClick);//вешаем клик на весь документ/окно/браузер
    return () => {
      document.removeEventListener('click', handleClick);
      // console.log('in useOutsideClick. Removing listener from document');
    }
  },[ref, onClose])

  function handleClick (event:MouseEvent){//смотрим куда ткнут клик. Выдаются дом элементы. Осталось только их отфильтровать с помощью рефа.
    // console.log('clicked element:', event.target);
    // console.log('ref element    :', ref.current);

    if(event.target instanceof Node && !ref.current?.contains(event.target)) {// "?" - fix: Object is possibly 'null'.
      //  в этом условии мы точно знаем что клик был вне модалки
      console.log('clicked outside!!! Closing modal')
      onClose()
    }
  }
  // useEffect(() => {//попытка вставить из примера с инета. Он работает но типизация не удается.
  //     const listener = (event:MouseEvent) => {
  //       // Do nothing if clicking ref"s element or descendent elements
  //       if (!ref.current || ref.current.contains(event.target)) {
  //         return;
  //       }
  //       onClose();
  //     };
  //
  //     document.addEventListener("mousedown", listener);
  //
  //     return () => {
  //       document.removeEventListener("mousedown", listener);
  //     };
  //   },
  //   // Add ref and handler to effect dependencies
  //   // It"s worth noting that because passed in handler is a new ...
  //   // ... function on every render that will cause this effect ...
  //   // ... callback/cleanup to run every render. It"s not a big deal ...
  //   // ... but to optimize you can wrap handler in useCallback before ...
  //   // ... passing it into this hook.
  //   [ref, onClose]
  // );
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