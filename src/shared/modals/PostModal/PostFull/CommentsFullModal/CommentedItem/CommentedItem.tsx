import React from 'react';
import styles from './commenteditem.css';
import {HeaderMeta} from "../../HeaderModal/HeaderTextBlock/HeaderMeta";
import {Break} from "../../../../../supportingComponents/Break";
import {Icon} from "../../../../../supportingComponents/Icon";
import {EIcons} from "../../../../../../utils/enums/EIcons";
import {CommentActionsPanel} from "../../CommentActionsPanel.tsx";
import {IComment} from "../../../../../../Store/Comments/commentsActions";


export interface ICommentItem {
  item:IComment
}

export function CommentItem({item}:ICommentItem) {

  return (
    <>
      {item.body &&(
        <div className={styles.item}>
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
            <HeaderMeta name={item.author} subreddit={item.subreddit} avatar={item.avatar} created={item.created}/>
            <p>
              {item.body}
            </p>
            <CommentActionsPanel item={item}/>
            {/*рекурсия если есть такие же субелементы*/}
            {
              item.replies &&
              item.replies.data.children[0].data.body &&
              <CommentItem item={item.replies.data.children[0].data}/>
            }
          </div>
        </div>
      )}
    </>

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