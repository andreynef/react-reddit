import React, {ChangeEvent, FormEvent, useContext} from 'react';
import styles from './commentForm.css';
import {ArrowsLeftRightIcon} from "../../../Icons/ArrowsLeftRightIcon";
import {MountainsIcon} from "../../../Icons/MountainsIcon";
import {PaperIcon} from "../../../Icons/PaperIcon";
import {ArrowDownIcon} from "../../../Icons/ArrowDownIcon";
import {ManIcon} from "../../../Icons/ManIcon";
import {ArrowCircleIcon} from "../../../Icons/ArrowCircleIcon";
import {HyperlinkIcon} from "../../../Icons/HyperlinkIcon";
import {MicrophoneIcon} from "../../../Icons/MicrophoneIcon";
import {ChatIcon} from "../../../Icons/ChatIcon";
import {PencilIcon} from "../../../Icons";
import {ArrowARightIcon} from "../../../Icons/ArrowARightIcon";
import {PdfIcon} from "../../../Icons/PdfIcon";
import {Icon} from "../../../supportingComponents/Icon";
import {EIcons} from "../../../../utils/enums/EIcons";
import {commentContext} from "../../../context/commentContext";

interface IModalMakeComment {
  name:string
}

export function CommentForm({name}:IModalMakeComment) {
  const {value, onChange} = useContext(commentContext);
  function handleChange(event:ChangeEvent<HTMLTextAreaElement>){
    onChange(event.target.value);
  }

  const handleSubmit = (event:FormEvent)=>{
    event.preventDefault();
  }

  return (
    <form method={'post'} className={styles.container} onSubmit={handleSubmit}>
      {/*<label className={styles.textContainer}>/!*первый вариант*!/*/}
      {/*  <textarea value={value} onChange={handleChange}/>*/}
      {/*  <span><span className={styles.name}>{name}</span>, оставьте ваш комментарий</span>*/}
      {/*</label>*/}
      <textarea className={styles.textContainer2} placeholder={`${name}, оставьте ваш комментарий`} value={value} onChange={handleChange}/>{/*альтернативный вариант*/}
      <div className={styles.panelWithButtonContainer}>
        <div className={styles.instrumentsPanel}>
          <Icon name={EIcons.arrowsLeftRight} size={10} tabletSize={16} desktopSize={20}/>
          <Icon name={EIcons.mountain} size={10} tabletSize={16} desktopSize={20}/>
          <Icon name={EIcons.paper} size={10} tabletSize={16} desktopSize={20}/>
          <Icon name={EIcons.arrowDown} size={10} tabletSize={16} desktopSize={20}/>
          <Icon name={EIcons.man} size={10} tabletSize={16} desktopSize={20}/>
          <Icon name={EIcons.arrowCircle} size={10} tabletSize={16} desktopSize={20}/>
          <Icon name={EIcons.hyperlink} size={10} tabletSize={16} desktopSize={20}/>
          <Icon name={EIcons.microphone} size={10} tabletSize={16} desktopSize={20}/>
          <Icon name={EIcons.chat} size={10} tabletSize={16} desktopSize={20}/>
          <Icon name={EIcons.pencil} size={10} tabletSize={16} desktopSize={20}/>
          <Icon name={EIcons.a} size={10} tabletSize={16} desktopSize={20}/>
          <Icon name={EIcons.pdf} size={10} tabletSize={16} desktopSize={20}/>
        </div>
        <button className={styles.button}>Комментировать</button>
      </div>
    </form>
  );
}
