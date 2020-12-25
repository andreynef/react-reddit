import React from 'react';
import {Dropdown} from "../../../../Dropdown";
import {Text} from "../../../../supportingComponents/Text";
import styles from './menu.css';
import {Icon} from "../../../../supportingComponents/Icon";
import {EIcons} from "../../../../../utils/enums/EIcons";
import {MenuButton} from "../../../../supportingComponents/MenuButton";

export function Menu() {


  return (
        <Dropdown//контейнер с логикой дропа
          button={//на что жать.
            <button className={styles.menuButton}>{/* кнопка открытия */}
              <Icon name={EIcons.menu} />
            </button>
          }
        >
          <div className={styles.menuDropdown}>{/* что вылазит */}
            <div className={styles.menuSubButtonContainer}>
              <MenuButton text={'Комментарии'} icon={EIcons.comment} onClick={()=>console.log('comment pressed')} className={styles.menuSubButton}/>
              <MenuButton text={'Поделиться'} icon={EIcons.share} onClick={()=>console.log('Поделиться pressed')} className={styles.menuSubButton}/>
              <MenuButton text={'Скрыть'} icon={EIcons.block} onClick={()=>console.log('Скрыть pressed')} className={styles.menuSubButton}/>
              <MenuButton text={'Сохранить'} icon={EIcons.save} onClick={()=>console.log('Сохранить pressed')} className={styles.menuSubButton}/>
              <MenuButton text={'Пожаловаться'} icon={EIcons.warning} onClick={()=>console.log('Пожаловаться pressed')} className={styles.menuSubButton}/>
            </div>
            <button className={styles.closeButton}>{/* кнопка закрытия */}
              <Text size={14} mobileSize={12} >
                Закрыть
              </Text>
            </button>
          </div>
        </Dropdown>
  );
}
