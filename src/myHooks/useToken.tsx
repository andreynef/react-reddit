import React, {useEffect, useState} from "react";

export function useToken() {//хук возвращающий токен из перем window
  const [token, setToken] = useState('');
  useEffect(()=>{
    if (window.__token__){
      setToken(window.__token__)
    }

  },[])

  return [token]//либо просто token. Тжсм.
}
