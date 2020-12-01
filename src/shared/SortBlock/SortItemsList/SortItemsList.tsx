import React from 'react';
import styles from './sortitemslist.css';
import {EyeIcon, CommentIcon, PencilIcon, SaveIcon} from "../../Icons";
import {Text} from "../../supportingComponents/Text";
import {EColors} from "../../../utils/enums/EColors";

interface ISortItemsListProps {
  bookmark: string;
}

export function SortItemsList({bookmark}:ISortItemsListProps) {//postid нужен для того чтобы при нажатии кнопок уведомлять АПИ о том что скрывать и блокировать.
  return (
    <ul className={styles.sortItemsList}>
      <div className={styles.divider} />

    {/*Прокомментированное. Рендерить при отсутствии команды сверху */}
      {bookmark !== 'commented' &&(
        <>
          <li className={styles.sortItem} onClick={()=>console.log('Button has been pressed')}>
            <CommentIcon />
            <Text size={12} color={EColors.gray99}>Прокомментированное</Text>
          </li>
          <div className={styles.divider} />
        </>
      )}

    {/*Просмотренное. Рендерить при отсутствии команды сверху*/}
      {bookmark !== 'seen' &&(
        <>
          <li className={styles.sortItem} onClick={()=>console.log('Button has been pressed')}>
            <EyeIcon />
            <Text size={12} color={EColors.gray99}>Просмотренное</Text>
          </li>
          <div className={styles.divider} />
        </>
      )}

    {/*Мои посты. Рендерить при отсутствии команды сверху*/}
      {bookmark !== 'posts' &&(
        <>
          <li className={styles.sortItem} onClick={()=>console.log('postId: '+ bookmark + ' .Button has been pressed')}>
            <PencilIcon />
            <Text size={12} color={EColors.gray99}>Мои посты</Text>
          </li>
          <div className={styles.divider} />
        </>
      )}

    {/*Сохраненное. Рендерить при отсутствии команды сверху*/}
      {bookmark !== 'saved' &&(
        <>
          <li className={styles.sortItem} onClick={()=>console.log('Button has been pressed')}>
            <SaveIcon />
            <Text size={12} color={EColors.gray99}>Сохраненное</Text>
          </li>
          <div className={styles.divider} />
        </>
      )}
    </ul>
  );
}
