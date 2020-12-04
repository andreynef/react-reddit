import React from 'react';
import {Dropdown} from "../../../../Dropdown";
import {Text} from "../../../../supportingComponents/Text";
import styles from './menu.css';
import {MenuDropList} from "./MenuDropList/MenuDropList";
import {Icon} from "../../../../supportingComponents/Icon";
import {EIcons} from "../../../../../utils/enums/EIcons";

export function Menu() {

  return (
        <Dropdown//контейнер с логикой дропа
          button={//на что жать.
            <button className={styles.menuButton}>{/* кнопка открытия */}
              <Icon name={EIcons.menu} />
            </button>
          }
        >
          <div className={styles.menuDropdown} >{/* что вылазит */}
            <MenuDropList/>{/* сам лист */}
            <button className={styles.closeButton}>{/* кнопка закрытия */}
              <Text size={14} mobileSize={12} >
                Закрыть
              </Text>
            </button>
          </div>
        </Dropdown>
  );
}
