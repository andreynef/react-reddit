import React from "react";
import {useUserDataTheory} from "./useUserDateTheory";

interface IUserContextData {
  name?: string;
  iconImg?: string;
}

export const userContext = React.createContext<IUserContextData>({})//здесь будут лежать данные кот предоставляет useUserData

export function UserContextProvider({children}: {children:React.ReactNode}) {//свой провайдер с хуком кот предоставляет данные.
  const [data] = useUserDataTheory();//предоставление контекста. Там есть токен и data (name,iconImg)

  //пометка. Контекст это глоб переменная. И он обновляется только когда передается нов обьект в кач value.
  return (
    <userContext.Provider value={data}>
      {children}
    </userContext.Provider>
  )
}




