import {useEffect, useState} from "react";
import axios from "axios";
import {useSelector} from "react-redux";
import {IInitialState} from "../Store/initialState";

interface IPostsData {
  list: IPost[];
}

interface IPost {
    id: string,
    author: string,
    created: string,
    avatar: string,
    title: string,
    karma: number,
    commentsAmount: number,
    isSaved: boolean,
    thumbnail: string,

}


export function usePostsData () {

  function getFewKeys (obj:IPost) {
    return {
      'author': obj.author,
      'id': obj.id,
      'data': new Date (obj.created).toLocaleString('ru'),
      'avatar': "https://copypast.ru/fotografii/foto_zhivotnih/jivotnye_v_obraze_znamenitostej_0_/jivotnye_v_obraze_znamenitostej_0_027.jpg",
      'title': obj.title,
      'karma': 25,
      'commentsAmount': 25,
      'isSaved': true,
      'preview': obj.thumbnail,
    }
  }

  const [data, setData] = useState<any>({});//создание своего локального стейта

  useEffect(()=>{//1раз/прогон без токена, 2раз с токеном.
    axios.get('https://www.reddit.com/best.json',{
      params:{
        limit:10
      }
    })
      .then((resp)=>{
        const dataArr = resp.data.data.children.map((item:any)=>getFewKeys(item.data))
        setData({list:dataArr})
      })
      .catch(console.log)
  },[])

  return [data]
}

