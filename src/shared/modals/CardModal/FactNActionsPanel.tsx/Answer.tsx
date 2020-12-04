import React from 'react';
import styles from './answer.css';
import {Dropdown} from "../../../Dropdown";
import {Icon} from "../../../supportingComponents/Icon";
import {EIcons} from "../../../../utils/enums/EIcons";
import {CommentForm} from "../CommentForm";

interface IAnswer {
  name?: string;
}

export function Answer({name}:IAnswer) {

  return (
    <>
    <Dropdown//контейнер с логикой дропа
      button={//на что жать.
        <span><Icon name={EIcons.comment}/>Ответить</span>
      }
    >
      <div className={styles.dropdown} >{/* что вылазит */}
        <CommentForm name={'name'}/>
      </div>
    </Dropdown>
      </>
  );
}


