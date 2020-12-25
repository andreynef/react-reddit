import React, {ChangeEvent, FormEvent} from 'react';
import styles from './searchblock.css';
import {Break} from "../../../supportingComponents/Break";
import {Icon} from "../../../supportingComponents/Icon";
import {EIcons} from "../../../../utils/enums/EIcons";
import {useDispatch, useSelector} from "react-redux";
import {IInitialState} from "../../../../Store/initialState";
import {updateSearchAC} from "../../../../Store/actions";

export function SearchBlock() {

  const tokenFromStore = useSelector<IInitialState, string>(state => state.token);//defaultValue={`storeToken: ${tokenFromStore}`}

  const dispatch = useDispatch();

  function handleChange (event:ChangeEvent<HTMLInputElement>){
    dispatch(updateSearchAC(event.target.value));
  }

  return (
      <div className={styles.searchBlock}>
          <Icon name={EIcons.search} />
          <Break size={4} tabletSize={12}/>
          {/*<input placeholder={'поиск'}/>*/}
          <input placeholder={'поиск'} onChange={handleChange}/>
      </div>
  );
}
