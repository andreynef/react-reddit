import React, {ChangeEvent, FormEvent} from 'react';
import styles from './commentForm.css';
import {Icon} from "../../../supportingComponents/Icon";
import {EIcons} from "../../../../utils/enums/EIcons";

interface ICommentForm {
  name:string,
  value: string,
  onChange:(event:ChangeEvent<HTMLTextAreaElement>)=>void,
  onSubmit:(event:FormEvent)=>void,
}

export function CommentForm({name, value, onChange, onSubmit}:ICommentForm) {
    return (
    <form method={'post'} className={styles.container} onSubmit={onSubmit}>
      <textarea className={styles.textArea} placeholder={`${name}, оставьте ваш комментарий`} value={value} onChange={onChange}/>
      <div className={styles.panelWithButtonContainer}>{/*блок с иконками и кнопкой*/}
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
        <button type={'submit'} className={styles.button}>Комментировать</button>
      </div>
    </form>
  );
}
