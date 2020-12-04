import React, {ChangeEvent, FormEvent} from "react";
import styles from "../shared/modals/CardModal/CommentForm/commentForm.css";

interface IModalMakeComment {
  name:string,
  value: string,
  onChange: (event:ChangeEvent<HTMLTextAreaElement>)=>void,
  onSubmit: (event:FormEvent)=>void,
}

//чисто презентационная компонента. Никакого Redux и State. Только входящие пропсы и стили.

export function CommentFormmm({name, value, onChange, onSubmit}:IModalMakeComment) {
  return (
    <form method={'post'} className={styles.container} onSubmit={onSubmit}>
      <textarea placeholder={`${name}, оставьте ваш комментарий`} value={value} onChange={onChange}/>
      <div>
        <button >Комментировать</button>
      </div>
    </form>
  );
}