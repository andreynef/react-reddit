import React from 'react';
import styles from './newMessages.css';
import {Break} from "../../../supportingComponents/Break";
import {Icon} from "../../../supportingComponents/Icon";
import {EIcons} from "../../../../utils/enums/EIcons";
import {Text} from "../../../supportingComponents/Text";
import {EColors} from "../../../../utils/enums/EColors";
import {useSelector} from "react-redux";
import {IInitialState} from "../../../../Store/initialState";

export function NewMessages() {

  const inbox_count = useSelector<IInitialState, number>(state => state.profile.data.inbox_count);

  const handleClick = (e:any) => {
    alert('msg icon clicked')
    // console.log(event.target)
  }

  return (
    <button className={styles.messagesButton} onClick={handleClick}>
      <div className={styles.messagesTextContainer}>
        <Text size={12} color={EColors.white}>{inbox_count}</Text>
      </div>
      <Break size={4}/>
      <Icon name={EIcons.envelope} />
    </button>
  );
}
