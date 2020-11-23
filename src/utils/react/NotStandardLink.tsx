import React from "react";
import {preventDefault} from "./preventDefault";
import {stopPropagation} from "./stopPropagation";

export function NotStandardLink(props: any) {
  // const handleClick = (e:React.SyntheticEvent<HTMLAnchorElement>) => {//ручной старый вариант
  //   e.stopPropagation();
  //   e.preventDefault();
  //   props.onClick();
  // }
  return (
    <a href={props.href} onClick={preventDefault(stopPropagation(props.onClick))}>{props.text}</a>
    // <a href={"#"} onClick={preventAll(props.onClick)}>Hello</a>//или сразу все
  )
}