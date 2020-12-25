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


export function usePostsCommentsData (id:string) {

  const [data, setData] = useState<any>([]);//создание своего локального стейта
  const source = useSelector<IInitialState>(state => state.posts.source)//достать токен из store
  useEffect(()=>{
    axios.get(`https://www.reddit.com${source}/comments/${id}.json`,{
      params:{
        limit:10,
        depth: 5,
      }
    })
      .then((resp)=>{
        console.log('resp comment:',resp);
        const dataArr = resp.data[1].data.children;
        setData(dataArr)
      })
      .catch(console.log)
  },[])

  return [data]
}

