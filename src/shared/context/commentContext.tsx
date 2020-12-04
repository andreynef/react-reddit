import React from "react";
import {useUserData} from "../../myHooks/useUserData";

interface ICommentContext {
  value: string;
  onChange: (value:string)=>void;
}
//-=-
type ICommentContext2 = {
  value: string;
  onChange: (value:string)=>void;
}

export const commentContext = React.createContext<ICommentContext>({value:'', onChange: ()=>{},})
