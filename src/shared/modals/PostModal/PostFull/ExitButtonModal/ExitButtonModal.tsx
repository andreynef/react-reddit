import React from 'react';
import styles from './exitbuttonmodal.css';
import {Icon} from "../../../../supportingComponents/Icon";
import {EIcons} from "../../../../../utils/enums/EIcons";


interface IProps {
  onClose:()=>void
}

export function ExitButtonModal(props:IProps) {
  return (
    <button className={styles.container} onClick={()=>props.onClose()}>
      <Icon name={EIcons.cross} size={20}/>
    </button>
  );
}
