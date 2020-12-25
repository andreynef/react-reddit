import React from 'react';
import styles from './ActionsPanel.css';
import {EIcons} from "../../../../../utils/enums/EIcons";
import {MenuButton} from "../../../../supportingComponents/MenuButton";
import {EColors} from "../../../../../utils/enums/EColors";
import {Text} from "../../../../supportingComponents/Text";
import {postCardToggleVisibleAC, postToggleSaveAC} from "../../../../../Store/Posts/postsActions";
import {useDispatch, useSelector} from "react-redux";
import {IInitialState} from "../../../../../Store/initialState";
import { useHistory } from 'react-router-dom';

export function ActionsPanel() {
  const dispatch = useDispatch();
  const postId = useSelector<IInitialState>(state=>state.postModal.id)
  const history = useHistory();
  return (
    <div className={styles.actionsContainer}>
      {/*<MenuButton text={'33 Комментария'} icon={EIcons.comment} size={10} className={styles.menuSubButton} tabletSize={12} desktopSize={14} />*/}
      <MenuButton text={'Поделиться'} icon={EIcons.share} size={10} onClick={()=>console.log('Поделиться pressed')} className={styles.menuSubButton} tabletSize={12} desktopSize={14}/>
      <MenuButton text={'Скрыть'} icon={EIcons.block} size={10} onClick={()=>{dispatch(postCardToggleVisibleAC(postId)), history.push('/')}} className={styles.menuSubButton} tabletSize={12} desktopSize={14}/>
      <MenuButton text={'Сохранить'} icon={EIcons.save} size={10} onClick={()=>dispatch(postToggleSaveAC(postId))} className={styles.menuSubButton} tabletSize={12} desktopSize={14}/>
      <MenuButton text={'Пожаловаться'} icon={EIcons.warning} size={10} className={styles.menuSubButton} tabletSize={12} desktopSize={14}/>
      {/*<Text size={14} color={EColors.gray99}>55% Проголосовали</Text>*/}
    </div>
  );
}
