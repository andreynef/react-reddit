import React from "react";

interface IItem {
  id: string;
  text: string;
  onClick?: (id:string)=> void;//кажд item будет иметь свой метод клика. При глобальном онклике нужно добавить к компоненте GenericListTheory доп пропс onClick, тобишь GenericListTheory({list, onClick}
  className?: string;// у кажд эл свой уник класс
  As?: 'a' | 'li' | 'button' | 'div';//можно менять тэги компонента
  href?: string;//на тот случ если нужна будет ссылка
}

interface IGenericListProps {
  list: IItem[];//массив компонентов/составных частей списка
}

const noop = () => {};

export function GenericList({list}: IGenericListProps) {//компонент кот может рендерить любые списки.
  return (
    <>
      {list.map(({As= 'li', text, onClick= noop, className, id, href})=>(
        <As className={className}//As заменяется на нужный тэг
            onClick={()=>onClick(id)}//каждому эл соотв свой онклик
            key={id}
            href={href}
        >
          {text}
        </As>
      ))}
    </>
  )
}



// export function MyList({list}: IMyListProps) {
//   return(
//     <ul>
//       {list.map((item)=>(
//         <li onClick={()=> onClick(item.id)} key={item.id}> {item.text}</li>//вариант с глобальным онкликом. Указываем id в онклике
//         <li onClick={()=>item.onClick(item.id)} key={item.id}> {item.value}</li>//каждому эл соотв свой онклик, поэтому не нужно указывать id.
//       ))}
//     </ul>
//   )
// }
