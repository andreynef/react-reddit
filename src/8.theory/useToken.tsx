import React, {useEffect, useState} from "react";

function useToken() {
  const [token, setToken] = useState('');
  useEffect(()=>{
    if (window.__token__){
      setToken(window.__token__)
    }

  },[])

  return [token]//либо просто token. Тжсм.
}
