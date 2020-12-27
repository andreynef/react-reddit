import axios from "axios";

const REDIRECT_URI_DEV = 'http://localhost:3000/auth';//вынести в env не полся.
const DURATION = 'permanent'; //or 'temporary' for logging out every 1h.
const SCOPE = 'read submit identity';
const TYPE = 'code';
// const SECRETold = 'tmfKWhwSI8JQfEcXqJgu3PNXLXo11w';//мой личный
const SECRET_DEV = 'RD2BDYxwYPnDsixEt7GmfPQbXutB5Q';//2й аккаунт https://www.reddit.com/prefs/apps
const CLIENT_ID_PROD='MEc6w5cll39TCA';//вынести в env не полся.
const SECRET_PROD='dFDQOPkRwOhJML4YTDKG5v7vDJb0rg';//вынести в env не полся.
const REDIRECT_URI_PROD='https://react-reddit-app-andrey.herokuapp.com/auth';//вынести в env не полся.
//используется в компоненте с кликом для перехода на странуцу Reddit авторизации.
export function getRedditAuthUrl () {
  return `https://www.reddit.com/api/v1/authorize?client_id=${process.env.NODE_ENV ? process.env.CLIENT_ID: CLIENT_ID_PROD}&response_type=${TYPE}&state=random_string&redirect_uri=${process.env.NODE_ENV ? process.env.REDIRECT_URI : REDIRECT_URI_PROD}&duration=${DURATION}&scope=${SCOPE}`
}

//используется в server.js для запроса в Reddit на получение access_token..
export function getAccessTokenRequest(req) {
  return axios.post(
    'https://www.reddit.com/api/v1/access_token',
    `grant_type=authorization_code&code=${req.query.code}&redirect_uri=${process.env.NODE_ENV ? process.env.REDIRECT_URI : REDIRECT_URI_PROD}`,
    {//подробности настройки в доке axios (github.com/axios/axios)
      auth: {
        username:process.env.NODE_ENV ? process.env.CLIENT_ID : CLIENT_ID_PROD,
        password:process.env.NODE_ENV ? process.env.SECRET: SECRET_PROD,
      },
      headers: {'Content-type':'application/x-www-form-urlencoded'}//указ тип дабы не было ошибок
    }
  )
}
