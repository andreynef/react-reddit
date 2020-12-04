import React, {useEffect, useRef} from "react";

interface IModal {
  onClose:()=>void;
  ref: React.RefObject<HTMLDivElement>
}

export function useOutsideClick({ref, onClose}:IModal) {

  useEffect(()=>{//хук для прослушки клика outside. когда рендерится этот комп
    document.addEventListener('click', handleClick);//вешаем клик на весь документ/окно/браузер
    return () => document.removeEventListener('click', handleClick)
  },[])

  function handleClick (event:MouseEvent){//смотрим куда ткнут клик. Выдаются дом элементы. Осталось только их отфильтровать с помощью рефа.
    if(event.target instanceof Node && !ref.current?.contains(event.target)) {//Argument of type 'EventTarget | null' is not assignable to parameter of type 'Node | null'.
      //  в этом условии мы точно знаем что клик был вне модалки
      onClose?.()
    }
  }
}
