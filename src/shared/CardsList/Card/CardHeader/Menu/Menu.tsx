import React from 'react';
import {MenuIcon} from "../../../../Icons";
import {Dropdown} from "../../../../Dropdown";
import {Text} from "../../../../Text";
import styles from './menu.css';
import {MenuItemsList} from "./MenuItemsList";

interface IMenu {
  id:string
}

export function Menu({id}:IMenu) {
  return (
        <Dropdown//контейнер с логикой дропа
          button={
            <button className={styles.menuButton}>
              <MenuIcon />
            </button>
          }
        >
          <div className={styles.dropdown} >
            <MenuItemsList id={id}/>
            <button className={styles.closeButton}>
              <Text size={14} mobileSize={12}>
                Закрыть
              </Text>
            </button>
          </div>
        </Dropdown>
  );
}
