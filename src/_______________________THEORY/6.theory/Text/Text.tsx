// шаблон для текста, размер и цвет кот меняется через входящие пропсы

import React from 'react';
import styles from './text.css';
import classNames from "classnames";//из библиотеки. (npm i classnames @types/classnames). Мерджит названия стилей в одну строку
import {EColors} from "../../utils/enums/EColors";

interface ITextProps {
  As?: 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'div' | 'a';//union type '|'
  children?: React.ReactNode;
  size: TSizes;
  mobileSize?: TSizes;
  tabletSize?: TSizes;
  desktopSize?: TSizes;
  color?: EColors;
  bold?: boolean;
  isActive?: boolean;
  border?:boolean;
  href?: string;
  reset?: boolean;
}

type TSizes = 28 | 20 | 16  | 14 | 12 | 10;

export function Text(props: ITextProps) {

  const {
    As = 'span',
    children,
    size,
    desktopSize,
    mobileSize,
    tabletSize,
    color = EColors.black,
    bold=false,
    isActive=false,
    border=false,
    href='#someUrl',
    reset=false,
  } = props;

  const classes = classNames(//ф из библиотеки кот мерджит названия стилей в одну строку. Арг через запятую.
    styles[`s${size}`],//вытаскивание из styles (icon.css) нужный "s...".
    styles[color],//без условного преобразования а просто факт, тк color = EColors.black назначен дефолтным.
    // спец конструкция {[x]:y}. Если правая часть не придет (= undefined) то левая часть не сработает. Превращается в форму styles[color]
    {[styles[`m${mobileSize}`]]: mobileSize},
    {[styles[`d${desktopSize}`]]: desktopSize},
    {[styles[`t${tabletSize}`]]: tabletSize},
    {[styles.bold]: bold},
    {[styles.border]: border},
    {[styles.reset]: reset},
  );

  return (
    <As className={classes}>
      {children}
    </As>
  );
}



