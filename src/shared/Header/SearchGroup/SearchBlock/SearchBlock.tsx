import React from 'react';
import styles from './searchblock.css';
import {Break} from "../../../supportingComponents/Break";
import {Icon} from "../../../supportingComponents/Icon";
import {EIcons} from "../../../../utils/enums/EIcons";

export function SearchBlock() {
  return (
      <div className={styles.searchBlock}>
          <Icon name={EIcons.search} />
          <Break size={4} tabletSize={12}/>
          <input placeholder={'поиск'} />
      </div>
  );
}
