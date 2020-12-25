import React, {useState} from 'react';
import styles from './sortblock.css';
import {Dropdown} from "../Dropdown";
import {MenuButton} from "../supportingComponents/MenuButton";
import {EIcons} from "../../utils/enums/EIcons";
import {Icon} from "../supportingComponents/Icon";
import {useDispatch, useSelector} from "react-redux";
import {postCardToggleVisibleAC, postToggleSaveAC, setSourceAC} from "../../Store/Posts/postsActions";
import {Text} from "../supportingComponents/Text";
import {Break} from "../supportingComponents/Break";
import {IInitialState} from "../../Store/initialState";
import {NavLink, useHistory} from 'react-router-dom';
import {EColors} from "../../utils/enums/EColors";

export function SortBlock() {
  const bookmark = useSelector<IInitialState,string>(state=>state.bookmark)
  const history = useHistory();

  return (
    <>

      {/*---------------mobile version---------------------*/}

      <Dropdown
        button={
          <>
            <div className={styles.buttonText}>
              {bookmark === 'Просмотренное' && <Icon name={EIcons.eye} size={10} tabletSize={14} desktopSize={16}/>}
              {bookmark === 'Сохраненное' && <Icon name={EIcons.save} size={10} tabletSize={14} desktopSize={16}/>}
              {bookmark === 'Прокомментированное' && <Icon name={EIcons.comment} size={10} tabletSize={14} desktopSize={16}/>}
              {bookmark === 'Мои посты' && <Icon name={EIcons.pencil} size={10} tabletSize={14} desktopSize={16}/>}
              <Break size={4} tabletSize={8} desktopSize={8}/>
              <Text size={12} tabletSize={20} desktopSize={20}>{bookmark}</Text>
              <Break size={4} tabletSize={8} desktopSize={8}/>
            </div>
          </>
        }
        classNameContainer={styles.sortBlockContainerMobile}
        classNameButton={styles.button}
        arrowIcon={<Icon name={EIcons.arrow} size={12}/>}
        classNameChildrenContainer={styles.dropdownWrapper}
        local
      >
        <div className={styles.dropdownContainer}>
          <div className={styles.dropdownButtonsContainer}>
            {bookmark !== 'Просмотренное' && <MenuButton text={'Просмотренное'} icon={EIcons.eye} className={styles.actionButton} onClick={()=>history.push("/seen")}/>}
            {bookmark !== 'Сохраненное' && <MenuButton text={'Сохраненное'} icon={EIcons.save} className={styles.actionButton} onClick={()=>history.push("/saved")}/>}
            {bookmark !== 'Прокомментированное' && <MenuButton text={'Прокомментированное'} icon={EIcons.comment} className={styles.actionButton} onClick={()=>history.push("/commented")}/>}
            {bookmark !== 'Мои посты' && <MenuButton text={'Мои посты'} icon={EIcons.pencil} className={styles.actionButton} onClick={()=>history.push("/myposts")}/>}
          </div>
          <button className={styles.dropdownCloseButton}>
            <Text size={14} mobileSize={12} >
              Закрыть
            </Text>
          </button>
        </div>
      </Dropdown>

      {/*---------------desktop version---------------------*/}

      <nav className={styles.sortBlockContainerDesktop}>
        <div className={styles.body}>
          <NavLink to="/seen" activeClassName={styles.active} className={styles.link}>
            <Text size={20} color={EColors.black}>Просмотренное</Text>
          </NavLink>
          <Break size={30}/>
          <NavLink to="/saved" activeClassName={styles.active} className={styles.link}>
            <Text size={20} color={EColors.black}>Сохраненное</Text>
          </NavLink>
          <Break size={30}/>
          <NavLink to="/myposts" activeClassName={styles.active} className={styles.link}>
            <Text size={20} color={EColors.black}>Мои посты</Text>
          </NavLink>
          <Break size={30}/>
          <NavLink to="/commented" activeClassName={styles.active} className={styles.link}>
            <Text size={20} color={EColors.black}>Прокомментированное</Text>
          </NavLink>
        </div>
      </nav>
    </>
);
}

