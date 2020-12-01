import express from 'express';
import ReactDOM from 'react-dom/server';
import { indexHtmlTemplate } from './indexHtmlTemplate';
import {App} from "../App";
import {getAccessTokenRequest} from "../shared/Reddit";

const app = express();//инициализация. Теперь app это instance нашего приложения

app.use('/static', express.static('./dist/client'));//спец роут кот будет раздавать статические файлы. По url'у '/static' будут доступны все файлы кот лежат в папке 'dist/client'.

app.get('/', (req,res) =>{// при обращении на url '/' выдает ответ шаблона html c рендером App.
    res.send(
        indexHtmlTemplate(ReactDOM.renderToString(App())),
    );
});

app.get('/auth', (req,res) =>{//при обращении на url '/auth' (со строкой с кодом кот приходит после Reddit авторизации) делается процедура получения токена (запрос на API reddit c определенными параметрами).
  getAccessTokenRequest(req)
    .then(({data})=>{//получаем токен.
      // data { // то что приходит
      //   access_token: '712161124719-R3TVWpHcJWJFGnXNX_o2Fb4A-E8eOg',
      //     token_type: 'bearer',
      //     expires_in: 3600,
      //     refresh_token: '712161124719-ic1EYQ2-3GJ6B0LTIROZyLvwf1-_Ig',
      //     scope: 'identity read submit'
      // }
      // Теперь сервер имеет токен. Остается его передать клиенту - проброс пропами в HTMLTemplate.       !!!
      console.log('data[access_token]:',data['access_token']);
      res.send(
        indexHtmlTemplate(ReactDOM.renderToString(App()), data['access_token']),
      );
    })
    .catch(console.log);
});

app.listen(3000, ()=>{
    console.log('file server.js is speaking : "Server started on http://localhost:3000"');
});