import React from 'react';
import styles from './cardPreview.css';
import {ArrowFilledIcon} from "../../../Icons";
import {Break} from "../../../supportingComponents/Break";
import {Text} from "../../../supportingComponents/Text";
import {Icon} from "../../../supportingComponents/Icon";
import {EIcons} from "../../../../utils/enums/EIcons";
import {Link} from "react-router-dom";
import {openPostThunk} from "../../../../Store/Comments/commentsActions";
import {useDispatch} from "react-redux";

interface PreviewProps {
  isSaved?: boolean;
  id?: string;
  preview?: string;
  postId:string;
  subreddit:string;
}

export function CardPreview({isSaved, id, preview, postId, subreddit}:PreviewProps) {
  const dispatch = useDispatch();

  return (
    <Link to={`/post/${postId}`} className={styles.previewContainer} onClick={()=>dispatch(openPostThunk(subreddit,postId))}>
      <img className={styles.previewImg}
           src={preview}
           alt={'previewPic'}
      />
      {/*<div style={{backgroundColor:'yellow', position:'absolute', top:'45%', left:'30%', padding: '5px'}}>id : {id}</div>*/}

      {isSaved && //если сохрен то отображается маркер.
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
    </Link>
  );
}
