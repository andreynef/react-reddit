import React, {ChangeEvent, FormEvent, useState} from "react";
import styles from "../shared/modals/CardModal/CommentForm/commentForm.css";

export function CommentFormValidation() {

  const [value, setValue] = useState('');
  const [isButtonTouched, setIsButtonTouched] = useState(false);
  const [valueError, setValueError] = useState('');
  function handleChange(event:ChangeEvent<HTMLTextAreaElement>){
    setValue(event.target.value);
  }

  const handleSubmit = (event:FormEvent)=>{
    event.preventDefault();
    setIsButtonTouched(true);
    setValueError(validateValue());
    const isFormValid = !validateValue();
    if(!isFormValid) return;
    alert ('form been sent');
  }

  const validateValue = ()=>{
    if(value.length <=3) return 'введите больше 3х символов';
    return '';
  }

  const theory = [
    'label нужен даже если есть placeholder',
    'aria-labeledby={id of text} - описание как лейбл дабы не повторяться',
    'aria-describedby={id of text} - описание ошибки. Удобно при валидации',
    'autocomplete',
    'aria-required, required - 1 дает отпр форму а 2 нет. Валидация и доступность.',
    'aria-invalid - читалка грит что он не валиден. Удобно вешать style без class',
    'inputmode={tel} - при нажатии появл своя клава'
  ]


  return (
    <form method={'post'} className={styles.container} onSubmit={handleSubmit}>
      <textarea
        className={styles.textaria}
        value={value}
        onChange={handleChange}
        aria-invalid={valueError?'true':undefined}
      />
      {isButtonTouched && valueError && (
        <div>{valueError}</div>
      )}
      <div className={styles.panelWithButtonContainer}>
        <button type={'submit'} className={styles.button}>Комментировать</button>
      </div>
    </form>
  );
}