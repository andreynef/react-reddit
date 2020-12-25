import React from 'react';
import styles from './emptycard.css';
import {ArrowFilledIcon, MenuIcon} from "../../Icons";
import {Break} from "../../supportingComponents/Break";

interface ICardProps {
  isSaved?: boolean;
  id?: string;
}

export function EmptyCard({id, isSaved}:ICardProps) {
  return (
    <li className={styles.emptyCard}>

      <div className={styles.textContent}>
        <div className={styles.metaMenu}>
          <div className={styles.meta}>
            <div className={styles.ava}/>
            <div className={styles.name}/>
            <div className={styles.date}/>
          </div>
          <div className={styles.menu}>
            <MenuIcon/>
          </div>
        </div>
        <div className={styles.title}/>
        <div className={styles.headerActions}>
          <div className={styles.headerActionsIcon}/>
          <div className={styles.headerActionsText}/>
        </div>
      </div>

      <div className={styles.preview}/>

      <div className={styles.controls}>
        <div className={styles.karma}>
          <div className={styles.up}>
            <ArrowFilledIcon/>
          </div>
          <Break size={8} inline/>
          <span>234</span>
          <Break size={8} inline/>
          <div className={styles.down}>
            <ArrowFilledIcon/>
          </div>
        </div>
        <div className={styles.controlActionsContainer}>
          <div className={styles.controlActionOne}/>
          <Break size={16}/>
          <div className={styles.controlActionTwo}/>
        </div>
      </div>
    </li>
  );
}
