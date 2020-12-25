import {Action, ActionCreator} from "redux";
import {ThunkAction} from "redux-thunk";
import axios from "axios";
import {IInitialState} from "../initialState";
import {openPostAC} from "../actions";

export const COMMENTS_REQUEST = 'COMMENTS_REQUEST';
export const COMMENTS_REQUEST_SUCCESS = 'COMMENTS_REQUEST_SUCCESS';
export const COMMENTS_REQUEST_ERROR = 'COMMENTS_REQUEST_ERROR';

export type CommentsRequestAction = {
  type: typeof COMMENTS_REQUEST ;
}
export type CommentsRequestSuccessAction = {
  type: typeof COMMENTS_REQUEST_SUCCESS ;
  filteredDataArr: IComment[],
}
export type CommentsRequestErrorAction = {
  type: typeof COMMENTS_REQUEST_ERROR ;
  error: string,
}

export interface IComment {
  author: string,
  id: string,
  created: string,
  avatar: string,
  url:string,
  score:number,
  body: string,
  author_flair_text:string,
  subreddit:string,
  replies: {
    data: any;
  },
}

export const commentsRequestAC: ActionCreator<CommentsRequestAction> = () => ({
  type: COMMENTS_REQUEST,
});

export const commentsRequestSuccessAC: ActionCreator<CommentsRequestSuccessAction> = (filteredDataArr:IComment[]) => ({
  type: COMMENTS_REQUEST_SUCCESS,
  filteredDataArr,
});

export const commentsRequestErrorAC: ActionCreator<CommentsRequestErrorAction> = (error:string) => ({
  type: COMMENTS_REQUEST_ERROR,
  error,
});


// Thunk: запроc данных в Reddit о списке постов -> успех или ошибка

export const openPostThunk = (subreddit:string,postId:string):ThunkAction<void, IInitialState, unknown, Action>=>(dispatch, getState)=> {//типизация из документации
  dispatch(openPostAC(postId));//загрузить в стор postModal со всеми данными о посте
  dispatch(commentsRequestAC());//лоадинг тру
  axios.get(`https://www.reddit.com/r/${subreddit}/comments/${postId}.json?sr_detail=true`,{
    params:{
      limit:10,
      depth: 5,
    }
  })
    .then((resp)=>{
      const filteredDataArr = resp.data[1].data.children.map((item:any)=>getCommentFewKeys(item.data));//выковыриваем нужные данные;
      dispatch(commentsRequestSuccessAC(filteredDataArr))
      // console.log('resp filteredComments:',filteredDataArr);
    })
    .catch((error)=>{
      // console.log("error from comments request --->:",error);
      dispatch(commentsRequestErrorAC(String(error)))
    })
}

export function getCommentFewKeys (data:any) {
  return {
    'author': data.author,
    'id': data.id,
    'created': new Date (data.created*1000).toLocaleString('ru', {year: 'numeric', month: 'numeric', day: 'numeric'}),
    'avatar': data.icon_img || "https://copypast.ru/fotografii/foto_zhivotnih/jivotnye_v_obraze_znamenitostej_0_/jivotnye_v_obraze_znamenitostej_0_027.jpg",
    'score':data.score,
    'body': data.body,
    'author_flair_text':data.author_flair_text,
    'subreddit':data.subreddit,
    'replies': data.replies,
  }
}
