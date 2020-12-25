import React, {useState} from 'react';
import styles from './commenteditem.css';
import {HeaderMeta} from "../../HeaderModal/HeaderTextBlock/HeaderMeta";
import {Break} from "../../../../supportingComponents/Break";
import {Icon} from "../../../../supportingComponents/Icon";
import {EIcons} from "../../../../../utils/enums/EIcons";
import {CommentActionsPanel} from "../../CommentActionsPanel.tsx";

export function CommentItem() {

  const [isModalOpened, setIsModalOpened] = useState(false);
  const [isAnswerOpened, setAnswerOpened] = useState(false);


  return (
    <li className={styles.item}>
      <div className={styles.visualThreadContainer}>
        <div className={styles.arrows}>
          <Icon name={EIcons.arrowFilled}/>
          <Break size={8} top/>
          <Icon name={EIcons.arrowFilled}/>
        </div>
        <Break size={20} top/>
        <div className={styles.line}/>
      </div>
      <div className={styles.textContainer}>
        <HeaderMeta name={"Sender's Name"} theme={"sender's theme"} isComment/>
        <p className={styles.text}>Сторонники тоталитаризма в науке будут объективно рассмотрены соответствующими инстанциями. Лишь реплицированные с зарубежных источников, современные исследования будут описаны максимально подробно.
        </p>
        <CommentActionsPanel/>

        {/*{commentOnComment}*/}
      </div>
    </li>

  );
}






//из 15 модуля

// const Comment = props =>{//dumb component
//   return (
//     <li
//       className="listItem"
//       id={props.id}
//     >
//       <div className="listHeader">
//         <div className="listHeader__name">{props.name}</div>
//         <button
//           type="button"
//           className="listHeader__cross"
//           aria-label="удалить"
//           onClick={props.handleDelete}
//         >
//         </button>
//       </div>
//       <div className="listItem__text">{props.text}</div>
//       <div className="listItem__date">{props.date}</div>
//     </li>
//   );
// }