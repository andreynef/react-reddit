import express from 'express';
import ReactDOM from 'react-dom/server';
import { indexHtmlTemplate } from './indexHtmlTemplate';
import {App} from "../App";
import {getAccessTokenRequest} from "../Reddit/Reddit";
import compression from "compression";
import helmet from "helmet";

const PORT = process.env.PORT || 3000;

const cors = require("cors");
const app = express();//инициализация. Теперь app это instance нашего приложения
// if(process.env.NODE_ENV){
  app.use(compression());
  app.use(helmet({
    contentSecurityPolicy:false,//откл заголовки безопастности. Далее нужно настроить.
  }));
// }

app.use(cors());
// app.use(cors({
//   origin: true,
//   credentials: true
// }));

app.use('/static', express.static('./dist/client'));//спец роут кот будет раздавать статические файлы. По url'у '/static' будут доступны все файлы кот лежат в папке 'dist/client'.

app.get('/auth', (req,res) =>{//при обращении на url '/auth' (со строкой с кодом кот приходит после Reddit авторизации) делается процедура получения токена (запрос на API reddit c определенными параметрами).
  getAccessTokenRequest(req)
    .then(({data})=>{//получаем токен.
      // data { // то что приходит в ответе:
      //   access_token: '712161124719-R3TVWpHcJWJFGnXNX_o2Fb4A-E8eOg',
      //     token_type: 'bearer',
      //     expires_in: 3600,
      //     refresh_token: '712161124719-ic1EYQ2-3GJ6B0LTIROZyLvwf1-_Ig',
      //     scope: 'identity read submit'
      // }
      // Теперь сервер имеет токен. Остается его передать клиенту - проброс пропами в HTMLTemplate.       !!!
      // console.log('data[access_token]:',data['access_token']);
      res.send(
        indexHtmlTemplate(ReactDOM.renderToString(App()), data['access_token']),
      );
    })
    .catch(console.log);
});

app.get('*', (req,res) =>{// при обращении на url '/' выдает ответ шаблона html c рендером App. Заменили на * для роутинга. Типа все что не пришло в /static и /auth идет сюда.
  res.send(
    indexHtmlTemplate(ReactDOM.renderToString(App())),
  );
});

app.listen(PORT, ()=>{
    console.log(`file server.js is speaking : "Server started on http://localhost:${PORT}"`);
});