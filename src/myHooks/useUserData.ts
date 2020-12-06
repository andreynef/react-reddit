import {useContext, useEffect, useState} from "react";
import axios from "axios";
import {tokenContext} from "../shared/context/tokenContext";

interface IUserData {
  name?: string;
  avaUrl?: string;
}

export function useUserData () {
  const [data, setData] = useState<IUserData>({});//создание своего стейта
  const token = useContext(tokenContext);//добавлен еще хук чтобы было все вместе связанное с UserData и не нужно передавать token в useUserData (token).

  useEffect(()=>{//1раз без токена, 2раз с токеном.
    axios.get('https://oauth.reddit.com/api/v1/me',{
      headers:{Authorization: `bearer ${token}`}
    })
      .then((resp)=>{
        setData({name:resp.data.name, avaUrl:resp.data.icon_img.split("?")[0]})//ловим ответ и сетим ниже только нужные данные. Подробности в доке www.reddit.com/dev/api/oauth
      })
      .catch(console.log)
  },[token])

  return [data]
}
