import React from 'react';
import styles from './cardPreview.css';
import {ArrowFilledIcon} from "../../../Icons";
import {Break} from "../../../supportingComponents/Break";
import {Text} from "../../../supportingComponents/Text";
import {Icon} from "../../../supportingComponents/Icon";
import {EIcons} from "../../../../utils/enums/EIcons";

interface PreviewProps {
  isSaved?: boolean;
  id?: string;
}

export function CardPreview({isSaved, id}:PreviewProps) {
  return (
    <div className={styles.previewContainer}>
      <img className={styles.previewImg}
           src={'https://i.pinimg.com/originals/fd/a9/ec/fda9ec08daa846f974323a22ee0b48ea.jpg'}
           alt={'previewPic'}
      />
      {/*<div style={{backgroundColor:'yellow', position:'absolute', top:'45%', left:'30%', padding: '5px'}}>id : {id}</div>*/}
      {isSaved &&
        <div  className={styles.marker}>
          <div className={styles.markerPartOne}>
            <Icon name={EIcons.save} size={10}/>
            <Break size={4}/>
            <Text size={10}>Сохраненное</Text>
          </div>
          <div className={styles.markerPartTwo}>
            <ArrowFilledIcon/>
          </div>
        </div>
      }
    </div>
  );
}
