import React from 'react';
import {Dropdown} from "../../Dropdown";
import {Text} from "../../supportingComponents/Text";
import styles from './menu.css';
import {Icon} from "../../supportingComponents/Icon";
import {EIcons} from "../../../utils/enums/EIcons";
import {MenuButton} from "../../supportingComponents/MenuButton";
import {useDispatch, useSelector} from "react-redux";
import {IInitialState} from "../../../Store/initialState";
import {postToggleSaveAC, postCardToggleVisibleAC} from "../../../Store/Posts/postsActions";


interface IMenuProps {
  postId:string;
}

export function Menu({postId}:IMenuProps) {

  const dispatch = useDispatch();



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
              <MenuButton text={'Скрыть'} icon={EIcons.block} onClick={()=>dispatch(postCardToggleVisibleAC(postId))} className={styles.menuSubButton}/>
              <MenuButton text={'Сохранить'} icon={EIcons.save} onClick={()=>dispatch(postToggleSaveAC(postId))} className={styles.menuSubButton}/>
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
