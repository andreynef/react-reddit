import React, {useContext} from 'react';
import styles from './userBlock.css';
import {Icon} from "../../supportingComponents/Icon";
import {EIcons} from "../../../utils/enums/EIcons";
import {Text} from "../../supportingComponents/Text";
import {EColors} from "../../../utils/enums/EColors";
import {getRedditAuthUrl} from "../../Reddit";
import {userContext} from "../../context/userContext";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../Redux/store";

export function UserBlock() {
  const dispatch = useDispatch();

  const userName = useSelector<RootState, string>(state => state.userProfile.name);
  const avaUrl = useSelector<RootState, string>(state => state.userProfile.avaUrl);
  const authHref = getRedditAuthUrl();

  //нужна Thunk
  const redditProfileAC = () => {//ф создающая запрос в Reditt.
    // return dispatch => {
      // unsplash.currentUser.profile()
      //   .then(toJson)
      //   .then(json => {//arr ответ
      //     dispatch(profileSuccess(json))//отправка действия dispatch кот необходима для Redux.
      //   })
    // }
    console.log('request sent')
  }

  return (//--> <a> --> www.reddit.com --> server.js '/auth' + код --> запрос токена --> ответ --> html шаблон window.__token__ --> App
    <a href={authHref} className={styles.userBox}>
    {/*<button className={styles.userBox} onClick={redditProfileAC}>*/}
      <div className={styles.avatarBox}>
        {avaUrl
          ?<img className={styles.avatarImg} src={avaUrl} alt="user avatar"/>
          :<Icon name={EIcons.anonymous} size={28}/>
        }
      </div>
      <div className={styles.username}>
        <Text size={20} color={userName !==''? EColors.black:EColors.grayC4}>
          {userName !=='' || 'User'}
        </Text>
      </div>
    {/*</button>*/}
    </a>
  );
}
