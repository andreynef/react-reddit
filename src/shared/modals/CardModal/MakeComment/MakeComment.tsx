import React from 'react';
import styles from './makecomment.css';
import {ArrowsLeftRightIcon} from "../../../Icons/ArrowsLeftRightIcon";
import {MountainsIcon} from "../../../Icons/MountainsIcon";
import {PaperIcon} from "../../../Icons/PaperIcon";
import {ArrowDownIcon} from "../../../Icons/ArrowDownIcon";
import {ManIcon} from "../../../Icons/ManIcon";
import {ArrowCircleIcon} from "../../../Icons/ArrowCircleIcon";
import {HyperlinkIcon} from "../../../Icons/HyperlinkIcon";
import {MicrophoneIcon} from "../../../Icons/MicrophoneIcon";
import {ChatIcon} from "../../../Icons/ChatIcon";
import {PencilIcon} from "../../../Icons";
import {ArrowARightIcon} from "../../../Icons/ArrowARightIcon";
import {PdfIcon} from "../../../Icons/PdfIcon";

interface IModalMakeComment {
  name:string
}

export function MakeComment({name}:IModalMakeComment) {
  return (
    <form method={'post'} className={styles.container}>
      {/*<label className={styles.textContainer}>*/}{/*первый вариант*/}
      {/*  <textarea/>*/}
      {/*  <span><span className={styles.name}>{name}</span>, оставьте ваш комментарий</span>*/}
      {/*</label>*/}
      <textarea className={styles.textContainer2} placeholder={`${name}, оставьте ваш комментарий`}/>{/*альтернативный вариант*/}
      <div className={styles.panelWithButtonContainer}>
        <div className={styles.instrumentsPanel}>
          <ArrowsLeftRightIcon/>
          <MountainsIcon/>
          <PaperIcon/>
          <ArrowDownIcon/>
          <ManIcon/>
          <ArrowCircleIcon/>
          <HyperlinkIcon/>
          <MicrophoneIcon/>
          <ChatIcon/>
          <PencilIcon/>
          <ArrowARightIcon/>
          <PdfIcon/>
        </div>
        <button className={styles.button}>Комментировать</button>
      </div>
    </form>
  );
}
