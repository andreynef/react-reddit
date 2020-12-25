import React, {useContext, useEffect} from 'react';
import styles from './userBlock.css';
import {Icon} from "../../../supportingComponents/Icon";
import {EIcons} from "../../../../utils/enums/EIcons";
import {Text} from "../../../supportingComponents/Text";
import {EColors} from "../../../../utils/enums/EColors";
import {Break} from "../../../supportingComponents/Break";
import {useDispatch, useSelector} from "react-redux";
import {IInitialState, IProfile, IProfileData} from "../../../../Store/initialState";
import {getRedditAuthUrl} from "../../../../Reddit/Reddit";
import {profileRequestThunk} from "../../../../Store/Profile/profileActions";
import {toggleRoomAC} from "../../../../Store/actions";

export function UserBlock() {

  const profileData = useSelector<IInitialState,IProfileData>(state=>state.profile.data);
  const token = useSelector<IInitialState>(state=>state.token);
  const isLoading = useSelector<IInitialState, boolean>(state=>state.profile.loading);
  const authUrl = getRedditAuthUrl();
  const dispatch = useDispatch();

  useEffect(()=>{//1раз без токена, 2раз с токеном.
    if(token !==''){
      dispatch(profileRequestThunk())
    }
  },[token])

  // const handleClick = ()=>{
  //   if(token === ''){
  //     window.location.assign(`${authUrl}`)
  //   }
  //   if(token !== ''){
  //     dispatch(toggleRoomAC())
  //   }
  // }

  return (//--> <a> --> www.reddit.com --> server.js '/auth' + код --> запрос токена --> ответ --> html шаблон window.__token__ --> App
    <a href={token !== '' ? profileData.profileUrl:authUrl} className={styles.userBox} target={token!== ''?"_blank":''}>
      <div className={styles.avatarBox}>
        {profileData.avaUrl
          ?<img className={styles.avatarImg} src={profileData.avaUrl} alt="user avatar"/>
          :<Icon name={EIcons.anonymous} size={28}/>
        }
      </div>
      <div className={styles.username}>
        <Break size={12}/>
        {isLoading ? (
          <Text size={20} color={EColors.grayC4}>
            Loading...
          </Text>
        ):(
          <Text size={20} color={name? EColors.black:EColors.grayC4}>
            {profileData.name || 'Аноним'}
          </Text>
        )}
      </div>
    </a>
  );
}
