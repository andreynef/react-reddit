import React from 'react';
import styles from './break.css';
import classNames from "classnames";//из библиотеки. (npm i classnames @types/classnames).

type TBreakSize = 4 | 8 | 12 | 14 | 16 | 20 | 30 | 40| 50;//просто так. Нужно согласовать с дизайнером.
type TDisplays = 'mobile' | 'tablet' | 'desktop';

interface IBreakProps {
  size: TBreakSize;
  mobileSize?: TBreakSize;
  tabletSize?: TBreakSize;
  desktopSize?: TBreakSize;
  inline?: boolean;//css: {display:inline}.
  top?: boolean;//если указан top то добавляется css: .top.s4 {padding: 4px 0 0;}, перезаписывая дефолтный правый отступ.
}

export function Break(props: IBreakProps) {
  const { size, desktopSize, mobileSize, tabletSize, inline=false, top=false} = props;
  const classes = classNames(//ф из библиотеки кот мерджит названия стилей в одну строку. Арг через запятую.
    styles[`s${size}`],//вытаскивание из styles (icon.css) нужный "s...". По умолчанию сделан отступ справа.
    // спец конструкция {[x]:y}. Если правая часть не придет (= undefined) то левая часть не сработает. Превращается в форму styles[color]
    {[styles[`m${mobileSize}`]]: mobileSize},
    {[styles[`d${desktopSize}`]]: desktopSize},
    {[styles[`t${tabletSize}`]]: tabletSize},
    {[styles.inline]: inline},
    {[styles.top]: top},
  );

  return (
    <div className={classes} />//При большом приложении будет слишком много лишних дивов что не оч хор.
  );
}



