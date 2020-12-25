import axios from "axios";

const REDIRECT_URI = 'http://localhost:3000/auth';
const DURATION = 'permanent'; //or 'temporary' for logging out every 1h.
const SCOPE = 'read submit identity';
const TYPE = 'code';
// const SECRETold = 'tmfKWhwSI8JQfEcXqJgu3PNXLXo11w';//мой личный
const SECRET = 'RD2BDYxwYPnDsixEt7GmfPQbXutB5Q';//2й аккаунт https://www.reddit.com/prefs/apps

//используется в компоненте с кликом для перехода на странуцу Reddit авторизации.
export function getRedditAuthUrl () {
  return `https://www.reddit.com/api/v1/authorize?client_id=${process.env.CLIENT_ID}&response_type=${TYPE}&state=random_string&redirect_uri=${REDIRECT_URI}&duration=${DURATION}&scope=${SCOPE}`
}

//используется в server.js для запроса в Reddit на получение access_token.
export function getAccessTokenRequest(req) {
  return axios.post(
    'https://www.reddit.com/api/v1/access_token',
    `grant_type=authorization_code&code=${req.query.code}&redirect_uri=http://localhost:3000/auth`,
    {//подробности настройки в доке axios (github.com/axios/axios)
      auth: {
        username:process.env.CLIENT_ID,
        password:SECRET
      },
      headers: {'Content-type':'application/x-www-form-urlencoded'}//указ тип дабы не было ошибок
    }
  )
}
