import React from 'react';
import styles from './exitbuttonmodal.css';
import {CrossIcon} from "../../../Icons";


interface IProps {
  onClose:()=>void
}

export function ExitButtonModal(props:IProps) {
  return (
    <button className={styles.container} onClick={()=>props.onClose()}>
      <CrossIcon/>
    </button>
  );
}
