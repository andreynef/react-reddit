import React from 'react';
import styles from './searchblock.css';
import {Break} from "../../../supportingComponents/Break";
import {Icon} from "../../../supportingComponents/Icon";
import {EIcons} from "../../../../utils/enums/EIcons";
import {useSelector} from "react-redux";
import {RootState} from "../../../../Redux/store";

export function SearchBlock() {

  const tokenFromStore = useSelector<RootState, string>(state => state.token);

  return (
      <div className={styles.searchBlock}>
          <Icon name={EIcons.search} />
          <Break size={4} tabletSize={12}/>
          <input placeholder={'поиск'} defaultValue={`storeToken: ${tokenFromStore}`}/>
      </div>
  );
}
