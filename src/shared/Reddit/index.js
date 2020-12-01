import axios from "axios";

const REDIRECT_URI = 'http://localhost:3000/auth';
const DURATION = 'permanent'; //or 'temporary' for logging out every 1h.
const SCOPE = 'read submit identity';
const TYPE = 'code';
const SECRET = 'tmfKWhwSI8JQfEcXqJgu3PNXLXo11w';


export function getRedditAuthUrl () {
  return `https://www.reddit.com/api/v1/authorize?client_id=${process.env.CLIENT_ID}&response_type=${TYPE}&state=random_string&redirect_uri=${REDIRECT_URI}&duration=${DURATION}&scope=${SCOPE}`
}

export function getAccessTokenRequest(req) {
  return axios.post(//запрос на API reddit c определенными параметрами для получения access_token.
    'https://www.reddit.com/api/v1/access_token',
    `grant_type=authorization_code&code=${req.query.code}&redirect_uri=http://localhost:3000/auth`,
    {//подробности настройки в доке axios (github.com/axios/axios)
      auth: {username:process.env.CLIENT_ID, password:'RD2BDYxwYPnDsixEt7GmfPQbXutB5Q'},//username and pass = clientId and secret.
      headers: {'Content-type':'application/x-www-form-urlencoded'}//указ тип дабы не было ошибок
    }
  )
}