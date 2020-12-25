// import React from "react";
// import {usePostsData} from "../../myHooks/usePostsData";
//
// interface IPostsContextData {
//   list: {
//     id: string,
//     author: string,
//     date: string,
//     avatar: string,
//     title: string,
//     karma: number,
//     commentsAmount: number,
//     isSaved: boolean,
//   }[];
// }
//
// export const postsContext = React.createContext<any>({})
//
// export function PostsContextProvider({children}: {children:React.ReactNode}) {//свой провайдер с хуком кот предоставляет данные.
//   const [data] = usePostsData();//предоставление контекста. Там есть данные о постах
//
//   //пометка. Контекст это глоб переменная. И он обновляется только когда передается нов обьект в кач value.
//   return (
//     <postsContext.Provider value={data}>
//       {children}
//     </postsContext.Provider>
//   )
// }