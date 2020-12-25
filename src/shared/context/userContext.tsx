import React from "react";
import {useUserData} from "../../myHooks/useUserData";

interface IUserContextData {
  name?: string;
  avaUrl?: string;
}

export const userContext = React.createContext<IUserContextData>({})//здесь будут лежать данные кот предоставляет useUserData

export function UserContextProvider({children}: {children:React.ReactNode}) {//свой провайдер с хуком кот предоставляет данные.
  const {data} = useUserData();//предоставление контекста. Там есть токен и data (name,iconImg)

  return (
    <userContext.Provider value={data}>
      {children}
    </userContext.Provider>
  )
}