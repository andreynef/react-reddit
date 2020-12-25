import React from 'react';
import {Portal} from "../../../utils/Portal";
import {PostFull} from "./PostFull";


export function PostModal() {

  return (
    <Portal
      children={<PostFull/>}
    />
  )
}