import React, {useContext} from 'react';
import styles from './userBlock.css';
import {Icon} from "../../supportingComponents/Icon";
import {EIcons} from "../../../utils/enums/EIcons";
import {Text} from "../../supportingComponents/Text";
import {EColors} from "../../../utils/enums/EColors";
import {Break} from "../../supportingComponents/Break";
import {useSelector} from "react-redux";
import {IInitialState, IProfile, IProfileData} from "../../../Store/initialState";
import {getRedditAuthUrl} from "../../../Reddit/Reddit";

export function UserBlock() {

  const profileData = useSelector<IInitialState,IProfileData>(state=>state.profile.data);
  const token = useSelector<IInitialState>(state=>state.token);
  const isLoading = useSelector<IInitialState, boolean>(state=>state.profile.loading);
  const authUrl = getRedditAuthUrl();

  return (//--> <a> --> www.reddit.com --> server.js '/auth' + код --> запрос токена --> ответ --> html шаблон window.__token__ --> App
    <a href={token?profileData.profileUrl:authUrl} className={styles.userBox} target={token?"_blank":''}>
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
