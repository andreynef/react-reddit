import React from 'react';
import styles from './envelopeButton.css';
import {EnvelopeIcon} from "../../../Icons";
import {Break} from "../../../Break";

export function EnvelopeButton() {
  return (
    <button className={styles.envelopeButton}>
      <span className={styles.envelopeText}>4</span>
      <Break size={4}/>
      <EnvelopeIcon/>
    </button>
  );
}
