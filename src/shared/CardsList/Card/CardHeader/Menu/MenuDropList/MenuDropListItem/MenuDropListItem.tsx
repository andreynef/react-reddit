import React from 'react';
import {Text} from "../../../../../../supportingComponents/Text";
import {Break} from "../../../../../../supportingComponents/Break";
import {Icon} from "../../../../../../supportingComponents/Icon";
import {EIcons} from "../../../../../../../utils/enums/EIcons";

interface IMenuDropListItem {
  text: string,
}

export const MenuDropListItem = ({text}:IMenuDropListItem) => {//создание компонента "как будет отображаться кажд элемент массива"
    let name;
    if (text === 'Комментарии'){
      name = EIcons.comment
    }
    if (text === 'Поделиться'){
      name = EIcons.share
    }
    if (text === 'Скрыть'){
      name = EIcons.block
    }
    if (text === 'Сохранить'){
      name = EIcons.save
    }
    if (text === 'Пожаловаться'){
      name = EIcons.warning
    }
  return (
    <>
      <Icon name={name} size={14}/>
      <Break size={4}/>
      <Text size={12}>{text}</Text>
    </>
  )
}
