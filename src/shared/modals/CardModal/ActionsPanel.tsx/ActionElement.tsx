import React, {ReactNode} from 'react';
import styles from './actionElement.css';
import {Icon} from "../../../supportingComponents/Icon";
import {EIcons} from "../../../../utils/enums/EIcons";

interface IActionElement {
  text: string;
  onClick?:()=>void;
  icon?: EIcons;
  size?: number;
}

export function ActionElement({text, onClick, icon, size}:IActionElement) {

  return (
    <div className={styles.actionButton} onClick={onClick}>
      <Icon name={icon} size={size}/>
      <span style={icon&&({marginLeft:'10px'})}>{text}</span>
    </div>
  );
}


