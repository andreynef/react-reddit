// шаблон для текста, размер и цвет кот меняется через входящие пропсы

import React from 'react';
import styles from './menuButton.css';
import classNames from "classnames";
import {EMenu} from "../../../utils/enums/EMenu";
import {EIcons} from "../../../utils/enums/EIcons";
import {Icon} from "../Icon";
import {Break} from "../Break";
import {Text} from "../Text";

//из библиотеки. (npm i classnames @types/classnames).

interface IButtonProps {
  size?: BSizes;
  mobileSize?: BSizes;
  tabletSize?: BSizes;
  desktopSize?: BSizes;
  text: string;
  bold?: boolean;
  icon?: EIcons;
  onClick: ()=>void;
  className?:string;
}

type BSizes = 28 | 20 | 16  | 14 | 12 | 10;

export function MenuButton(props: IButtonProps) {
  const {
    size=12,
    desktopSize,
    mobileSize,
    tabletSize,
    bold=false,
    text,
    onClick,
    icon,
    className,
  } = props;
  const classes = classNames(//ф из библиотеки кот мерджит названия стилей в одну строку.
    styles[`s${size}`],//в итоге будет 's22', а styles['s22'] будет равен тому стилю кот нужен из файла icon.css
    {[styles[`m${mobileSize}`]]: mobileSize},//если правая часть не придет то ничего не произойдет. А если придет то сработает лев часть.
    {[styles[`d${desktopSize}`]]: desktopSize},
    {[styles[`t${tabletSize}`]]: tabletSize},
    {[styles.bold]: bold},
    className,
  );

  return (
    <button onClick={onClick} className={classes}>
      {icon && (
        <>
          <Icon name={icon} size={size}/>
          <Break size={4}/>
        </>
      )}
      <Text size={size}>{text}</Text>
    </button>
  );
}



