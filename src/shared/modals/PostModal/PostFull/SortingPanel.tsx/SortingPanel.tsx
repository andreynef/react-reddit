import React from 'react';
import styles from './sortingPanel.css';
import {Dropdown} from "../../../../Dropdown";
import {Icon} from "../../../../supportingComponents/Icon";
import {EIcons} from "../../../../../utils/enums/EIcons";

export function SortingPanel() {
  return (
    <div className={styles.container}>
      {/*Сортировать по:*/}
      <Dropdown
        button={
          <button className={styles.button}>
            <span>Лучшие</span>
              <Icon name={EIcons.arrow} />
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


