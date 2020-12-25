import React from "react";

interface IGenericListProps {
  list: {
    id: string,
    children?: string | JSX.Element;
    onClick?: (id?:string) => void;//кажд item будет иметь свой метод клика. При глобальном онклике нужно добавить к <GenericList/> доп пропс onClick.
    className?: string;
    As?: 'a' | 'li' | 'button' | 'div';
    href?: string;
  }[];
}

const noop = () => {};

export function GenericList({list}: IGenericListProps) {//компонент кот может рендерить любые списки.
  return (
    <>
      {list.map(({As = 'li', children, onClick = noop, className, id, href})=>(
        <As //As заменяется на переданный сверху тэг. По умолчанию задан Li.
          className={className}//className передается сверху
          onClick={() => onClick(id)}
          key={id}
          href={href}
        >
          {children}
        </As>
      ))}
    </>
  )
}

