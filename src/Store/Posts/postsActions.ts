import {Action, ActionCreator} from "redux";
import {ThunkAction} from "redux-thunk";
import axios from "axios";
import {IInitialState, initialState, IProfileData} from "../initialState";
import {useSelector} from "react-redux";

export const POSTLIST_REQUEST = 'POSTLIST_REQUEST';
export const POSTLIST_REQUEST_SUCCESS = 'POSTLIST_REQUEST_SUCCESS';
export const POSTLIST_REQUEST_ERROR = 'POSTLIST_REQUEST_ERROR';
export const POST_TOGGLE_SAVE = 'POST_TOGGLE_SAVE';
export const POST_SEEN = 'POST_SEEN';
export const POSTCARD_TOGGLE_VISIBLE = 'POSTCARD_TOGGLE_VISIBLE';
export const SET_SOURCE = 'SET_SOURCE';


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
export type PostToggleSaveACtion = {
  type: typeof POST_TOGGLE_SAVE ;
  id: string,
}
export type PostSeenACtion = {
  type: typeof POST_SEEN ;
  id: string,
}
export type PostCardToggleVisibleAction = {
  type: typeof POSTCARD_TOGGLE_VISIBLE ;
  id:string,
}
export type SetSourceAction = {
  type: typeof SET_SOURCE ;
  source:string,
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
  isMyPost: boolean,
  isCommented: boolean,
  isSeen: boolean,
  isVisible: boolean,
  thumbnail: string,
  preview2: string,
  url:string,
  score:number,
  subreddit:string,
  permalink: string,
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

export const postToggleSaveAC: ActionCreator<PostToggleSaveACtion> = (id:string) => ({
  type: POST_TOGGLE_SAVE,
  id,
});

export const postSeenAC: ActionCreator<PostSeenACtion> = (id:string) => ({
  type: POST_SEEN,
  id,
});

export const postCardToggleVisibleAC: ActionCreator<PostCardToggleVisibleAction> = (id:string) => ({
  type: POSTCARD_TOGGLE_VISIBLE,
  id,
});

export const setSourceAC: ActionCreator<SetSourceAction> = (source:string) => ({
  type: SET_SOURCE,
  source,
});


// Thunk: запроc данных в Reddit о списке постов -> успех или ошибка


export const postListRequestThunk = ():ThunkAction<void, IInitialState, unknown, Action>=>(dispatch, getState)=> {//типизация из документации
  const source = getState().posts.source;
  dispatch(postListRequestAC());//пока что тупо переключает лоадинг на true
  console.log('requesting source:', source)
  axios.get(`https://www.reddit.com/${source}.json?sr_detail=true`,{//https://www.reddit.com/user/${author}/about.json
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
      const responseFilteredListArr = resp.data.data.children.map((item:any)=>getPostFewKeys(item.data));//выковыриваем нужные данные
      dispatch(postListRequestSuccessAC(responseFilteredListArr, resp.data.data.after));//2 данные, сам лист и метка
      console.log('resp postList:', resp.data.data.children)
    })
    .catch((error)=>{
      console.log("error from request:",error);
      dispatch(postListRequestErrorAC(String(error)))
    })
}

export function getPostFewKeys (obj:any) {
  return {
    'author': obj.author,
    'id': obj.id,
    'created': new Date (obj.sr_detail.created_utc*1000).toLocaleString('ru', {year: 'numeric', month: 'numeric', day: 'numeric'}),
    'avatar': obj.sr_detail.icon_img || "https://copypast.ru/fotografii/foto_zhivotnih/jivotnye_v_obraze_znamenitostej_0_/jivotnye_v_obraze_znamenitostej_0_027.jpg",
    'title': obj.title,
    'karma': 25,
    'commentsAmount': 25,
    'isSaved': false,
    'isMyPost': false,
    'isCommented': false,
    'isSeen': false,
    'isVisible': true,
    'preview2': obj.url_overridden_by_dest,
    'url':obj.url,
    'score':obj.score,
    'thumbnail': obj.thumbnail,
    'subreddit':obj.subreddit,
    'permalink': obj.permalink,
  }
}




// Our proxy that makes cross origin fetching possible
// const proxy = "https://cors-anywhere.herokuapp.com/";
// fetch(`${proxy}https://www.reddit.com/r/javascript/${postType}.json`)
//   .then(function(res) {
//     // Return the response in JSON format
//     return res.json();
//   })
//   .then(function(res) {
//     // We render our posts to the UI in this block
//     const postsArr = res.data.children;
//     }