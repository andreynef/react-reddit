import React, {useEffect, useState} from "react";

export function useUserDataTheory () {//возвращает все данные о юзере из Store.

const [data, setData] = useState({});//создание своего стейта
const tokenTheory = 'jhsdsh'
  useEffect(()=>{//1раз без токена, 2раз с токеном.
    if (!tokenTheory) return;
    console.log('do async request')
    const answer = {name:'name', iconImg:'iconImg'}
    setData(answer)
  },[tokenTheory])

  return [data]
}



