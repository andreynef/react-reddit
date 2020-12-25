import React from 'react';
import styles from './sortingPanel.css';
import {ArrowIcon} from "../../../Icons";
import {Dropdown} from "../../../Dropdown";

export function SortingPanel() {
  return (
    <div className={styles.container}>
      Сортировать по:
      <Dropdown//Контейнер с логикой дропа
        button={
          <button className={styles.button}>
            <span>Лучшее</span>
              <ArrowIcon/>
          </button>
        }
      >
        <div className={styles.dropdown}>
          some best list
        </div>
      </Dropdown>
    </div>
  );
}


