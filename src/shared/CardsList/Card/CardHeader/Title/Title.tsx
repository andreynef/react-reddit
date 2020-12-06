import React, {useRef, useState} from 'react';
import styles from './title.css';
import {NotStandardLink} from "../../../../../utils/react/NotStandardLink";
import {CardModal} from "../../../../modals/CardModal";

interface ITitleProps {
  title: string,
}

export function Title({title}:ITitleProps) {

  const [isModalOpened, setIsModalOpened] = useState(false);

  return (//переделать на кнопку
    <>
      {/*<button onClick={()=>{console.log('Title is pressed. CardModal is opened');setIsModalOpened(true)}}>*/}
      {/*  <h2 className={styles.titleContainer}>*/}
      {/*    {title}*/}
      {/*  </h2>*/}
      {/*</button>*/}
      <h2 className={styles.titleContainer}>
        <NotStandardLink href={"#post-url"} text={title} onClick={()=>{console.log('Title is pressed. CardModal to "true"');setIsModalOpened(true)}}/>
      </h2>

      {/*компонент находится здесь для лучшего поиска/структуры а рендерится через портал в др рут дабы не задевать чужие стили. Смысл в избежании влияния стилей.*/}

      {isModalOpened && <CardModal onClose={()=>setIsModalOpened(false)}/>}
    </>
  )
}
