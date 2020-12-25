import React from 'react';
import styles from './headertextblock.css';
import {HeaderMeta} from "./HeaderMeta";

export function HeaderTextBlock() {
  return (
    <div className={styles.container}>
      <h2>Следует отметить, что новая модель организационной деятельности поможет</h2>
      <HeaderMeta name={'Владимир Петров'} theme={'Законодательство'}/>
    </div>
  );
}
