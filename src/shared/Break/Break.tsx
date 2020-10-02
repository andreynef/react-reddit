import React from 'react';
import styles from './break.css';
import classNames from "classnames";//из библиотеки. (npm i classnames @types/classnames).

type TBreakSize = 4 | 8 | 10 | 12 | 14 | 16 | 20 | 30 | 50;
type TDisplays = 'mobile' | 'tablet' | 'desktop';

interface IBreakProps {
  size: TBreakSize;
  mobileSize?: TBreakSize;
  tabletSize?: TBreakSize;
  desktopSize?: TBreakSize;
  inline?: boolean;//чтобы разделять inline элементы в 1 строке
  top?: boolean;//управлять с какой стор будет паддинг, справа или сверху.По умолчанию справа, а если true то сверху, убав при этом right.
}



export function Break(props: IBreakProps) {
  const { size, desktopSize, mobileSize, tabletSize, inline=false, top=false} = props;
  const classes = classNames(//ф из библиотеки кот мерджит названия стилей в одну строку.
    styles[`s${size}`],//в итоге будет 's22', а styles['s22'] будет равен тому стилю кот нужен. По умолчанию padding-right.
    {[styles[`mobile_s${mobileSize}`]]: mobileSize},//если правая часть не придет то ничего не произойдет. А если придет то сработает лев часть.
    {[styles[`desktop_s${mobileSize}`]]: desktopSize},
    {[styles[`tablet_s${mobileSize}`]]: tabletSize},
    {[styles.inline]: inline},
    {[styles.top]: top},
  );

  return (
    <div className={classes} />
  );
}



