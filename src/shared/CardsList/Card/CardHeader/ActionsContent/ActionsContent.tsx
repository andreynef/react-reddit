import React from 'react';
import {Text} from "../../../../supportingComponents/Text";
import {Break} from "../../../../supportingComponents/Break";
import {EColors} from "../../../../../utils/enums/EColors";
import styles from "./actionsContent.css";
import {Icon} from "../../../../supportingComponents/Icon";
import {EIcons} from "../../../../../utils/enums/EIcons";

interface ITextContentProps {
  commentsAmount: number;
}

const bookmark = 'seen';

export function ActionsContent({commentsAmount}:ITextContentProps) {
  return (
    <div className={styles.actionsContentContainer}>
      {bookmark === 'seen' &&(
        <button className={styles.buttonSeen}>
          <Icon name={EIcons.eye}/>
          <Break size={4} inline/>
          <Text size={10} color={EColors.gray99} tabletSize={14}>3 часа назад</Text>
        </button>
      )}
      {/*{bookmark === 'saved' &&(*/}
      {/*    <button>*/}
      {/*      <RemoveCrossIcon/>*/}
      {/*      <Break size={4} inline/>*/}
      {/*      <Icon size={10} color={EColors.gray99} tabletSize={14}>Убрать из списка</Icon>*/}
      {/*    </button>*/}
      {/*)}*/}
      {/*{bookmark === 'myPosts' &&(*/}
      {/*  <>*/}
      {/*    <button>*/}
      {/*      <StatisticIcon/>*/}
      {/*      <Break size={8} inline/>*/}
      {/*      <Icon size={10} color={EColors.gray99} tabletSize={14}>Статистика публикации</Icon>*/}
      {/*    </button>*/}
      {/*    <Break size={8} inline/>*/}
      {/*    <button>*/}
      {/*      <ShareIcon/>*/}
      {/*      <Break size={8} inline/>*/}
      {/*      <Icon size={10} color={EColors.gray99} tabletSize={14}>Поделиться</Icon>*/}
      {/*    </button>*/}
      {/*    <Break size={8} inline/>*/}
      {/*    <button>*/}
      {/*      <GarbageIcon/>*/}
      {/*      <Break size={8} inline/>*/}
      {/*      <Icon size={10} color={EColors.gray99} tabletSize={14}>Удалить</Icon>*/}
      {/*    </button>*/}
      {/*  </>*/}
      {/*)}*/}
      {/*{bookmark === 'commented' &&(*/}
      {/*  <div className={styles.actionCommentContainer}>*/}
      {/*    <CommentsButton bookmark={bookmark} commentsAmount={commentsAmount}/>*/}
      {/*  </div>*/}
      {/*)}*/}
    </div>
  );
}
