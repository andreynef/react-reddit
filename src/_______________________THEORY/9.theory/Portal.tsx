import React, {useState} from 'react';
import styles from './title.css';
import ReactDOM from "react-dom";
import {NotStandardLink} from "../utils/react/NotStandardLink";

function TitleTheory() {

  const [isModalOpened, setIsModalOpened] = useState(false);//стейт модалки нахся в компоненте кот ее вызывает.

  return (
    <>
      <h2 className={styles.titleContainer}>
        <NotStandardLink href={"#post-url"} text={'title'} onClick={()=>setIsModalOpened(true)}/>
      </h2>
      {/*компонент находится здесь для лучшего поиска/структуры а рендерится через портал в др месте дабы не задевать чужие стили. Смысл в избежании влияния стилей.*/}
      {isModalOpened && <Modal/>}
    </>
  )
}

//----------------------------------------------------------------------------------------------

          export function Modal() {//модалка где-то там

            const node = document.querySelector('#modal_root');//находим DOM где будет отрендерен компонент
            if(!node) return null;//исправление типизации node|null на просто null.

            return ReactDOM.createPortal((//рендер компонента через портал в этот DOM.
                <div>
                  modalComponent
                </div>
            ), node);//1арг это 'что' а 2й арг это 'куда'
          }
//--------------------------------------------------------------------------------------------------

