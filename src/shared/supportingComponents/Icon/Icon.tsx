import React from 'react';
import styles from "./icon.css";
import {
  EyeIcon,
  BlockIcon,
  CommentIcon,
  MenuIcon,
  SaveIcon,
  ShareIcon,
  WarningIcon,
  AnonymousIcon,
  ArrowFilledIcon,
  ArrowIcon,
  GarbageIcon,
  PencilIcon,
  RemoveCrossIcon,
  RocketIcon,
  SearchIcon,
  StatisticIcon,
  EnvelopeIcon
} from "../../Icons";
import {EIcons} from "../../../utils/enums/EIcons";
import {ArrowARightIcon} from "../../Icons/ArrowARightIcon";
import {ArrowCircleIcon} from "../../Icons/ArrowCircleIcon";
import {ArrowDownIcon} from "../../Icons/ArrowDownIcon";
import {ArrowsLeftRightIcon} from "../../Icons/ArrowsLeftRightIcon";
import {ChatIcon} from "../../Icons/ChatIcon";
import {GraphIcon} from "../../Icons/GraphIcon";
import {HyperlinkIcon} from "../../Icons/HyperlinkIcon";
import {ManIcon} from "../../Icons/ManIcon";
import {MicrophoneIcon} from "../../Icons/MicrophoneIcon";
import {MountainsIcon} from "../../Icons/MountainsIcon";
import {PaperIcon} from "../../Icons/PaperIcon";
import {PdfIcon} from "../../Icons/PdfIcon";
import classNames from "classnames";

export interface IIconProps {
  name?: EIcons;
  size?: number;
  mobileSize?: ISizes;
  tabletSize?: ISizes;
  desktopSize?: ISizes;
}

type ISizes = 20 | 18 | 16  | 14 | 12 | 10;

export function Icon(props: IIconProps) {
  const { size = 16, name, desktopSize, mobileSize, tabletSize} = props;

  const classes = classNames(
    styles['iconContainer'],
    styles[`s${size}`],
    {[styles[`m${mobileSize}`]]: mobileSize},
    {[styles[`d${desktopSize}`]]: desktopSize},
    {[styles[`t${tabletSize}`]]: tabletSize},
    // styles[color],
  );
  return (
    <div className={classes}>
      {name === 'menu' && <MenuIcon/>}
      {name === 'block' && <BlockIcon/>}
      {name === 'comment' && <CommentIcon/>}
      {name === 'save' && <SaveIcon/>}
      {name === 'share' && <ShareIcon/>}
      {name === 'warning' && <WarningIcon/>}
      {name === 'eye' && <EyeIcon/>}
      {name === 'envelope' && <EnvelopeIcon/>}
      {name === 'anonymous' && <AnonymousIcon/>}
      {name === 'a' && <ArrowARightIcon/>}
      {name === 'arrowCircle' && <ArrowCircleIcon/>}
      {name === 'arrowDown' && <ArrowDownIcon/>}
      {name === 'arrowFilled' && <ArrowFilledIcon/>}
      {name === 'arrow' && <ArrowIcon/>}
      {name === 'arrowsLeftRight' && <ArrowsLeftRightIcon/>}
      {name === 'chat' && <ChatIcon/>}
      {name === 'garbage' && <GarbageIcon/>}
      {name === 'graph' && <GraphIcon/>}
      {name === 'hyperlink' && <HyperlinkIcon/>}
      {name === 'man' && <ManIcon/>}
      {name === 'microphone' && <MicrophoneIcon/>}
      {name === 'mountain' && <MountainsIcon/>}
      {name === 'paper' && <PaperIcon/>}
      {name === 'pdf' && <PdfIcon/>}
      {name === 'pencil' && <PencilIcon/>}
      {name === 'remove' && <RemoveCrossIcon/>}
      {name === 'rocket' && <RocketIcon/>}
      {name === 'search' && <SearchIcon/>}
      {name === 'statistic' && <StatisticIcon/>}
    </div>
  );
}



