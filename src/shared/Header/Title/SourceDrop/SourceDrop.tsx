import styles from "./sourceDrop.css";
import {Dropdown} from "../../Dropdown";
import {Icon} from "../../supportingComponents/Icon";
import {EIcons} from "../../../utils/enums/EIcons";
import React, {useState} from "react";
import {Break} from "../../supportingComponents/Break";
import {Text} from "../../supportingComponents/Text";
import {MenuButton} from "../../supportingComponents/MenuButton";
import {useDispatch, useSelector} from "react-redux";
import {setSourceAC} from "../../../Store/Posts/postsActions";
import {IInitialState} from "../../../Store/initialState";
import {EColors} from "../../../utils/enums/EColors";

export function SourceDrop() {
  // const [isOpen, setIsOpen]=useState(false);
  const dispatch = useDispatch();
  const source = useSelector<IInitialState>(state=>state.posts.source)

  const handleClick = (source:string)=>{
    dispatch(setSourceAC(source));
    // setIsOpen(false);
  };

  return (//dropdown гемор с позиционированием -> ручная сборка без него.
    <Dropdown
      button={
      <>
        <div className={styles.buttonText}>
          <Icon name={EIcons.rocket} size={10} tabletSize={14} desktopSize={16}/>
          <Break size={4} tabletSize={8} desktopSize={8}/>
          <Text size={12} tabletSize={20} desktopSize={20}>
            {source === 'best' && 'Лучшие'}
            {source === 'r/popular' && 'Популярные'}
            {source === 'top' && 'Toп'}
            {source === 'rising' && 'Трендовые'}
          </Text>
          <Break size={4} tabletSize={8} desktopSize={8}/>
        </div>
      </>
    }
      classNameButton={styles.button}
      classNameChildrenContainer={styles.dropdownWrapper}
      arrowIcon={<Icon name={EIcons.arrow} size={12}/>}
      local
    >
      <div className={styles.dropdownContainer}>
        <div className={styles.dropdownButtonsContainer}>
          {source !=='best' && <MenuButton text={'Лучшие'}  className={styles.actionButton} onClick={()=>handleClick('best')}/>}
          {source !=='r/popular' && <MenuButton text={'Популярные'}  className={styles.actionButton} onClick={()=>handleClick('r/popular')}/>}
          {source !=='top' && <MenuButton text={'Топ'}  className={styles.actionButton} onClick={()=>handleClick('top')}/>}
          {source !=='rising' && <MenuButton text={'Трендовые'}  className={styles.actionButton} onClick={()=>handleClick('rising')}/>}
        </div>
        <button className={styles.dropdownCloseButton}>
          <Text size={14} mobileSize={12} >
            Закрыть
          </Text>
        </button>
      </div>
    </Dropdown>
  )
}













// return (//dropdown гемор с позиционированием -> ручная сборка без него.
//   <div className={styles.wrapper}>
//     <button className={styles.buttonContainer} style={{borderRadius:isOpen?`7px 7px 0 0`: '7px'}} onClick={()=>setIsOpen(!isOpen)}>
//       <div className={styles.buttonText}>
//         <Icon name={EIcons.rocket} size={10} tabletSize={14} desktopSize={16}/>
//         <Break size={4} tabletSize={8} desktopSize={8}/>
//         <Text size={12} tabletSize={20} desktopSize={20}>
//           {source === 'best' && 'Лучшие'}
//           {source === 'r/popular' && 'Популярные'}
//           {source === 'top' && 'Toп'}
//           {source === 'rising' && 'Трендовые'}
//         </Text>
//         <Break size={4} tabletSize={8} desktopSize={8}/>
//       </div>
//       {isOpen
//         ?
//         <div style={{transform:'rotate(0deg)'}}>
//           <Icon name={EIcons.arrow} size={12} />
//         </div>
//         :
//         <div style={{transform:'rotate(180deg)'}}>
//           <Icon name={EIcons.arrow} size={12}/>
//         </div>
//       }
//
//     </button>
//     {isOpen &&(
//       <div className={styles.dropdownWrapper}>
//         <div className={styles.dropdownContainer}>
//           <div className={styles.dropdownButtonsContainer}>
//             {source !=='best' && <MenuButton text={'Лучшие'}  className={styles.actionButton} onClick={()=>handleClick('best')}/>}
//             {source !=='r/popular' && <MenuButton text={'Популярные'}  className={styles.actionButton} onClick={()=>handleClick('r/popular')}/>}
//             {source !=='top' && <MenuButton text={'Топ'}  className={styles.actionButton} onClick={()=>handleClick('top')}/>}
//             {source !=='rising' && <MenuButton text={'Трендовые'}  className={styles.actionButton} onClick={()=>handleClick('rising')}/>}
//           </div>
//           <button className={styles.dropdownCloseButton} onClick={()=>setIsOpen(false)}>
//             <Text size={14} mobileSize={12} >
//               Закрыть
//             </Text>
//           </button>
//         </div>
//       </div>
//     )}
//   </div>
// )
