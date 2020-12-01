const path = require('path');
const {HotModuleReplacementPlugin, DefinePlugin} = require('webpack'); //уже есть в вебпаке
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV;
const IS_DEV = NODE_ENV ==='development';
const IS_PROD = NODE_ENV ==='production';
const GLOBAL_CSS_REGEXP = /\.global\.css$/;
const DEV_PLUGINS = [
    new CleanWebpackPlugin(),//удаление старых сгенерированных chunks при генерации новых js файлов при каждом изменении кода
    new HotModuleReplacementPlugin(),
];
const COMMON_PLUGINS = [
    new DefinePlugin(
      // {'process.env.CLIENT_ID':"'EbQkgBbSpBpWzQ'"},//client id for Reddit. "" для того что плагин вставляет то что внутри "" как строку.
      {'process.env.CLIENT_ID':`'${process.env.CLIENT_ID}'`}//либо закинуть его в env чтобы этот айди не лежал в приложении а подавался извне. Client id передаем в package.json.
    ),
];

setupDevtool = () =>{
    if (IS_DEV) return 'eval';
    if (IS_PROD) return false;
}

module.exports = {
    mode: NODE_ENV ? NODE_ENV : 'development',
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
        alias: {//замена зависимости. Когда требуется то что слева, заменяется на то что справа
            'react-dom': IS_DEV ? '@hot-loader/react-dom' : 'react-dom',//реакт дом заменяется на пропатченный реакт дом, чтобы обновляться на горячую.(дев режим)
        }
    },
    entry: [
        path.resolve(__dirname, '../src/client/index.jsx'),//после этого модуля добавляем строку ниже
        'webpack-hot-middleware/client?path=http://localhost:3001/static/__webpack_hmr',//js код кот б добавлен в index.jsx в конец. Path указывает путь до нового сервера. Настройка запросов к серверу кот б отдавать данные с hmr.
        ],
    output: {
        path: path.resolve(__dirname, '../dist/client'),
        filename: 'client.js',
        publicPath: "/static/",//путь по кот б доступны наши статические ассеты chunks с файлами для hrm
    },
    module: {
        rules: [
            {
                test: /\.[jt]sx?$/,
                use: ['ts-loader']//встраивание с пом него в бандл.
            },
            {
                test: /\.css$/,//было less
                use: [//действие справа налево, сначала less потом css потом style, потом сверху в бандл.
                    'style-loader',//style
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {//все css файлы воспринимаются как модули
                                mode: 'local',
                                localIdentName: '[name]__[local]--[hash:base64:5]',//маркировка сгенерированных стилей
                            }
                        }
                    },//css
                ],
                exclude: GLOBAL_CSS_REGEXP // match all css files except GLOBAL_CSS_REGEXP и превращал их в css модули.
            },
            {
                test: GLOBAL_CSS_REGEXP,// матчить только их. И тжсм сделать в серверной чести но без style
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    devtool: setupDevtool(),
    plugins: IS_DEV
        ? DEV_PLUGINS.concat(COMMON_PLUGINS)//используем и дев и коммон плагины
        : COMMON_PLUGINS,//при продакшене исп только коммон плагины
};

