import React from 'react';
import styles from './newMessages.css';
import {Break} from "../../../supportingComponents/Break";
import {Icon} from "../../../supportingComponents/Icon";
import {EIcons} from "../../../../utils/enums/EIcons";
import {Text} from "../../../supportingComponents/Text";
import {EColors} from "../../../../utils/enums/EColors";

export function NewMessages() {

  const newMessages = 8;

  return (
    <button className={styles.messagesButton}>
      <div className={styles.messagesTextContainer}>
        <Text size={12} color={EColors.white}>{newMessages}</Text>
      </div>
      <Break size={4}/>
      <Icon name={EIcons.envelope} />
    </button>
  );
}
