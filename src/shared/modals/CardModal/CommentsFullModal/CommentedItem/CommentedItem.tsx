import React from 'react';
import styles from './commenteditem.css';
import {HeaderMeta} from "../../HeaderModal/HeaderTextBlock/HeaderMeta";
import {FactNActionsPanel} from "../../FactNActionsPanel.tsx";
import {ArrowFilledIcon, ArrowIcon} from "../../../../Icons";
import {ArrowDownIcon} from "../../../../Icons/ArrowDownIcon";
import {Break} from "../../../../supportingComponents/Break";

let commentOnCommentOnComment = (
  <li className={styles.item}>
    <div className={styles.visualThreadContainer}>
      <div className={styles.arrows}>
        <ArrowFilledIcon/>
        <Break size={8} top/>
        <ArrowFilledIcon/>
      </div>
      <Break size={20} top/>
      <div className={styles.line}> </div>
    </div>
    <div className={styles.textContainer}>
      <HeaderMeta name={"Sender's Name"} theme={"sender's theme"} isComment/>
      <p className={styles.text}>коммент на коммент на коммент
      </p>
      <div className={styles.actionsContainer}>
        <FactNActionsPanel isComment={true}/>
      </div>
    </div>
  </li>
)

let commentOnComment = (
  <li className={styles.item}>
    <div className={styles.visualThreadContainer}>
      <div className={styles.arrows}>
        <ArrowFilledIcon/>
        <Break size={8} top/>
        <ArrowFilledIcon/>
      </div>
      <Break size={20} top/>
      <div className={styles.line}> </div>
    </div>
    <div className={styles.textContainer}>
      <HeaderMeta name={"Sender's Name"} theme={"sender's theme"} isComment/>
      <p className={styles.text}>коммент на коммент
      </p>
      <div className={styles.actionsContainer}>
        <FactNActionsPanel isComment={true}/>
      </div>
      {commentOnCommentOnComment}
    </div>
  </li>
)

export function CommentedItem() {
  return (
    <li className={styles.item}>
      <div className={styles.visualThreadContainer}>
        <div className={styles.arrows}>
          <ArrowFilledIcon/>
          <Break size={8} top/>
          <ArrowFilledIcon/>
        </div>
        <Break size={20} top/>
        <div className={styles.line}> </div>
      </div>
      <div className={styles.textContainer}>
        <HeaderMeta name={"Sender's Name"} theme={"sender's theme"} isComment/>
        <p className={styles.text}>Сторонники тоталитаризма в науке будут объективно рассмотрены соответствующими инстанциями. Лишь реплицированные с зарубежных источников, современные исследования будут описаны максимально подробно.
        </p>
        <div className={styles.actionsContainer}>
          <FactNActionsPanel isComment={true}/>
        </div>
        {commentOnComment}
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