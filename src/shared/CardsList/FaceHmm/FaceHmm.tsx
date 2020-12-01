import React from 'react';
import styles from './facehmm.css';
import {ArrowFilledIcon, MenuIcon} from "../../Icons";
import {Break} from "../../supportingComponents/Break";

interface ICardProps {
  isSaved?: boolean;
  id?: string;
}

export function FaceHmm({id, isSaved}:ICardProps) {
  return (
    <div className={styles.face}>
      <img src={'https://c7.uihere.com/files/54/214/491/rick-sanchez-morty-smith-rick-and-morty-season-1-adult-swim-rick-and-morty.jpg'} alt={'face'}/>
      <span>Хмм... здесь пока пусто</span>
    </div>
  );
}
