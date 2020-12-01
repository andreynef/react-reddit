import React from 'react';
import styles from './menuDropList.css';
import {GenericList} from "../../../../../../utils/GenericList";
import {MenuDropListItem} from "./MenuDropListItem/MenuDropListItem";
import {addRandomId} from "../../../../../../utils/react/generateRandomId";

export function MenuDropList() {

  const menuTextArr = [//список текста в виде массива
    {text:'Комментарии'},
    {text:'Поделиться'},
    {text:'Скрыть'},
    {text:'Сохранить'},
    {text:'Пожаловаться'},
  ].map(addRandomId)//MenuDropList будет вызван n (Card) раз и у кажд эл этого списка будет сгенерен новый id. Итого На сайте 100шт 'комментариев' и у кажд свой id.

  const listForGenericList = menuTextArr.map(item=>(//добавляем к этому массиву свойства генерика чтобы потом его применить в рендере.
    {
      id:item.id,
      className: styles.menuItem,
      onClick: ()=>console.log('id:', item.id),
      children:<MenuDropListItem text={item.text}/>,
    }
    ))


  return (//генерим генерик на выходе
    <ul className={styles.menuDropList}>
      <GenericList list={listForGenericList} />
    </ul>
  );
}

