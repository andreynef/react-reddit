import React from 'react';
import styles from './commentsbutton.css';
import {Break} from "../../../../supportingComponents/Break";
import {Dropdown} from "../../../../Dropdown";
import {Comment} from "../Comment";
import {Icon} from "../../../../supportingComponents/Icon";
import {EIcons} from "../../../../../utils/enums/EIcons";

const bookmark = 'commented';

interface ICommentButtonProps {
  commentsAmount: number;
}

export function CommentsButton({commentsAmount}:ICommentButtonProps) {
  return (
    <div className={styles.commentsButtonContainer}>
      <Dropdown isInline
        button={
          <button className={styles.commentsButton}>
            <Icon name={EIcons.comment}/>
            <Break size={4}/>
            {bookmark==='commented' ? <span>Комментарий</span> : <span>{commentsAmount}</span>}
          </button>
        }
      >
        <div className={styles.commentsDropdown}>
          <Comment commentsAmount={commentsAmount}/>
        </div>
      </Dropdown>
    </div>
  );
}
