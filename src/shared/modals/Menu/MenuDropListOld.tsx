import React from 'react';
import styles from './menuDropList.css';
import {GenericList} from "../../../../../utils/GenericList";

export function MenuDropListOld() {

  const menuTextArr = [//список текста в виде массива
    {text:'Комментарии'},
    {text:'Поделиться'},
    {text:'Скрыть'},
    {text:'Сохранить'},
    {text:'Пожаловаться'},
  ];
  //.map(addRandomId) . MenuDropListOld будет вызван n (CardLoadMoreBtn) раз и у кажд эл этого списка будет сгенерен новый id. Итого На сайте 100шт 'комментариев' и у кажд свой id.

  const listForGenericList = menuTextArr.map(item=>(//добавляем к этому массиву свойства генерика чтобы потом его применить в рендере.
    {
      id: item.text,
      className: styles.menuItem,
      onClick: ()=>console.log('text:', item.text),
      // children:<MenuDropListItem text={item.text}/>,
      children:<button />,
    }
    ))


  return (//генерим генерик на выходе
    <ul className={styles.menuDropList}>
      <GenericList list={listForGenericList} />
    </ul>
  );
}

