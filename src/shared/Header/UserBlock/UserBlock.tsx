import React, {useContext} from 'react';
import styles from './userBlock.css';
import {Icon} from "../../supportingComponents/Icon";
import {EIcons} from "../../../utils/enums/EIcons";
import {Text} from "../../supportingComponents/Text";
import {EColors} from "../../../utils/enums/EColors";
import {getRedditAuthUrl} from "../../Reddit";
import {userContext} from "../../context/userContext";

export function UserBlock() {

  const {name, iconImg} = useContext(userContext)
  const href = getRedditAuthUrl();

console.log(href)
  return (//--> <a> --> www.reddit.com --> server.js '/auth' + код --> запрос токена --> ответ --> html шаблон window.__token__ --> App
    <a href={href} className={styles.userBox}>
      <div className={styles.avatarBox}>
        {iconImg
          ?<img className={styles.avatarImg} src={iconImg} alt="user avatar"/>
          :<Icon name={EIcons.anonymous} size={28}/>
        }
      </div>
      <div className={styles.username}>
        <Text size={20} color={name? EColors.black:EColors.grayC4}>
          {name || 'User'}
        </Text>
      </div>
    </a>
  );
}
