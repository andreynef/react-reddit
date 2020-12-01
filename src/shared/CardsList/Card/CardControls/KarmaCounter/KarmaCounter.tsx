import React from 'react';
import styles from './karmacounter.css';
import {Break} from "../../../../supportingComponents/Break";
import {Icon} from "../../../../supportingComponents/Icon";
import {EIcons} from "../../../../../utils/enums/EIcons";

export function KarmaCounter() {

  const karma = 234;
  
  return (
    <div className={styles.karmaCounter}>
      <button className={styles.up}>
        <Icon name={EIcons.arrowFilled}/>
      </button>
      <Break size={8} inline/>
      <span className={styles.karmaValue}>{karma}</span>
      <Break size={8} inline/>
      <button className={styles.down}>
        <Icon name={EIcons.arrowFilled}/>
      </button>
    </div>
  );
}
