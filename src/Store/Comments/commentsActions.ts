import {Action, ActionCreator} from "redux";
import {ThunkAction} from "redux-thunk";
import axios from "axios";
import {IInitialState} from "../initialState";

export const POSTLIST_REQUEST = 'POSTLIST_REQUEST';
export const POSTLIST_REQUEST_SUCCESS = 'POSTLIST_REQUEST_SUCCESS';
export const POSTLIST_REQUEST_ERROR = 'POSTLIST_REQUEST_ERROR';
export const POST_TOGGLE_SAVE = 'POST_TOGGLE_SAVE';
export const POSTCARD_TOGGLE_VISIBLE = 'POSTCARD_TOGGLE_VISIBLE';
export const COMMENTS_REQUEST = 'COMMENTS_REQUEST';
export const COMMENTS_REQUEST_SUCCESS = 'COMMENTS_REQUEST_SUCCESS';
export const COMMENTS_REQUEST_ERROR = 'COMMENTS_REQUEST_ERROR';


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
export type PostCardToggleVisibleAction = {
  type: typeof POSTCARD_TOGGLE_VISIBLE ;
  id:string,
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
  isVisible: boolean,
  preview: string,
  preview2: string,
  url:string,
  score:number,
  link_flair_text:string,
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

export const PostToggleSaveAC: ActionCreator<PostToggleSaveACtion> = (id:string) => ({
  type: POST_TOGGLE_SAVE,
  id,
});

export const PostCardToggleVisibleAC: ActionCreator<PostCardToggleVisibleAction> = (id:string) => ({
  type: POSTCARD_TOGGLE_VISIBLE,
  id,
});

// Thunk: запроc данных в Reddit о списке постов -> успех или ошибка

export const source = '/r/popular';

export const postListRequestThunk = ():ThunkAction<void, IInitialState, unknown, Action>=>(dispatch, getState)=> {//типизация из документации
  dispatch(postListRequestAC());//пока что тупо переключает лоадинг на true
  axios.get(`https://www.reddit.com${source}.json?sr_detail=true`,{//https://www.reddit.com/user/${author}/about.json
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
      console.log('resp:', resp.data.data.children)
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
    'created': new Date (obj.sr_detail.created_utc).toLocaleString('ru'),
    'avatar': obj.sr_detail.icon_img || "https://copypast.ru/fotografii/foto_zhivotnih/jivotnye_v_obraze_znamenitostej_0_/jivotnye_v_obraze_znamenitostej_0_027.jpg",
    'title': obj.title,
    'karma': 25,
    'commentsAmount': 25,
    'isSaved': false,
    'isVisible': true,
    'preview2': obj.url_overridden_by_dest,
    'url':obj.url,
    'score':obj.score,
    'preview': obj.thumbnail,
    'link_flair_text':obj.link_flair_text
  }
}

export const commentsRequestThunk = (postId:string):ThunkAction<void, IInitialState, unknown, Action>=>(dispatch, getState)=> {//типизация из документации
  dispatch(commentsRequestAC());
  axios.get(`https://www.reddit.com${source}/comments/${postId}.json`,{
    params:{
      limit:10,
      depth: 5,
    }
  })
    .then((resp)=>{
      console.log('resp comments:',resp);
      const dataArr = resp.data[1].data.children;

    })
    .catch((error)=>{
      console.log("error from comments request:",error);
      dispatch(postListRequestErrorAC(String(error)))
    })
}