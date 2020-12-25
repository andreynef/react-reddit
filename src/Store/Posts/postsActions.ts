import {Action, ActionCreator} from "redux";
import {ThunkAction} from "redux-thunk";
import axios from "axios";
import {IinitialState} from "../initialState";

export const POSTLIST_REQUEST = 'POSTLIST_REQUEST';
export const POSTLIST_REQUEST_SUCCESS = 'POSTLIST_REQUEST_SUCCESS';
export const POSTLIST_REQUEST_ERROR = 'POSTLIST_REQUEST_ERROR';

export type PostListRequestAction = {
  type: typeof POSTLIST_REQUEST ;
}
export type PostListRequestSuccessAction = {
  type: typeof POSTLIST_REQUEST_SUCCESS ;
  listArr: IPost[],
  after: string,
}
export type PostListRequestErrorAction = {
  type: typeof POSTLIST_REQUEST_ERROR ;
  error: string,
}

export interface IPost {
  id: string,
  author: string,
  created: string,
  avatar: string,
  title: string,
  karma: number,
  commentsAmount: number,
  isSaved: boolean,
  thumbnail: string,
  preview: string,
  url:string,
  score:number,
}
export const postListRequestAC: ActionCreator<PostListRequestAction> = () => ({
  type: POSTLIST_REQUEST,
});

export const postListRequestSuccessAC: ActionCreator<PostListRequestSuccessAction> = (listArr:IPost[], after:string) => ({
  type: POSTLIST_REQUEST_SUCCESS,
  listArr,
  after,
});

export const postListRequestErrorAC: ActionCreator<PostListRequestErrorAction> = (error:string) => ({
  type: POSTLIST_REQUEST_ERROR,
  error,
});

// Thunk: запроc данных в Reddit о списке постов -> успех или ошибка

export const postListRequestThunk = ():ThunkAction<void, IinitialState, unknown, Action>=>(dispatch, getState)=> {//типизация из документации
  dispatch(postListRequestAC());//пока что тупо переключает лоадинг на true
  axios.get(`https://www.reddit.com/best.json?sr_detail=true`,{//https://www.reddit.com/user/${author}/about.json
    headers: {
      // 'Content-type':'application/x-www-form-urlencoded',
      // 'Access-Control-Allow-Origin': '*',
      // 'Authorization': 'bearer 712161124719-slL4NEk0qqTq_ua8DPlu1eAEeBNCIQ',
    },
    params:{
      limit:20,
      after: getState().posts.after,//якорь метка последнего места
    }
  })
    .then((resp) => {
      console.log('resp:', resp)
      const responseFilteredListArr = resp.data.data.children.map((item:any)=>getPostObjWithFewKeys(item.data));//выковыриваем нужные данные
      dispatch(postListRequestSuccessAC(responseFilteredListArr, resp.data.data.after));//2 данные, сам лист и метка
    })
    .catch((error)=>{
      console.log("error from request:",error);
      dispatch(postListRequestErrorAC(String(error)))
    })
}

// export const rAddAC = () => {//ф создающая запрос в Unsplash.
//   return (dispatch,getState) => {//2м аргументом идет стейт, если нужен.
//     unsplash.photos.listPhotos(counterPages(), 10, "latest")//counterPages() это число кот кажд раз при вызове увеличся на 1.
//       .then(toJson)
//       .then(json => {//arr ответ
//         console.log('got json answer from add:', json)
//         dispatch(addSuccess(json))//отправка действия dispatch кот необходима для Redux.
//       })
//   }
// }

export function getPostObjWithFewKeys (obj:any) {
  return {
    'author': obj.author,
    'id': obj.id,
    'created': new Date (obj.sr_detail.created_utc).toLocaleString('ru'),
    'avatar': obj.sr_detail.icon_img || "https://copypast.ru/fotografii/foto_zhivotnih/jivotnye_v_obraze_znamenitostej_0_/jivotnye_v_obraze_znamenitostej_0_027.jpg",
    'title': obj.title,
    'karma': 25,
    'commentsAmount': 25,
    'isSaved': true,
    // 'preview': obj.url_overridden_by_dest,
    'url':obj.url,
    'score':obj.score,
    'preview': obj.thumbnail,
  }
}