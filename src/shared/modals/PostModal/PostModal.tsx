import React, {useEffect, useRef, useState} from 'react';
import styles from './Cardmodal.css';
import {ActionsPanel} from "./ActionsPanel.tsx";
import {SortingPanel} from "./SortingPanel.tsx";
import {ModeratorDelete} from "./ModeratorDelete";
import {HeaderModal} from "./HeaderModal";
import {MainBodyModal} from "./MainBodyModal";
import {ExitButtonModal} from "./ExitButtonModal";
import {CommentsList} from "./CommentsFullModal";
import {Break} from "../../supportingComponents/Break";
import {CommentFormContainer} from "../CommentFormContainer/CommentFormContainer";
import {Portal} from "../../../utils/Portal";

interface ICardModal {
  onClose:()=>void;
  id?: string;
}

export function CardModal({onClose, id}:ICardModal) {

  return (
    <Portal
      onClose={onClose}
      children={
        <>
          <ExitButtonModal onClose={onClose}/>
          <HeaderModal/>
          <MainBodyModal/>
          <div style={{borderTop: '1px solid var(--grayD9)'}} />
          <ActionsPanel postId={'233'} votedPercentage={55} commentsCount={22}/>
          <CommentFormContainer/>
          <SortingPanel/>
          <div style={{borderTop: '1px solid var(--grayD9)'}}/>
          <Break size={40}/>
          <CommentsList/>
          <ModeratorDelete/>
        </>
      }
      />
  )
}
