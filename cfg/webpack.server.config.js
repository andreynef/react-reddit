const {DefinePlugin} = require('webpack');
const path = require('path');
const nodeExternals = require('webpack-node-externals');//удалить из сервера лишние модули из папки node-modules, тк эта папка и так будет установлена в проекте.
const NODE_ENV = process.env.NODE_ENV;
const GLOBAL_CSS_REGEXP = /\.global\.сss$/;
const IS_DEV = NODE_ENV ==='development';

module.exports = {
    target: "node",
    mode: NODE_ENV ? NODE_ENV : 'development',
    entry: path.resolve(__dirname, '../src/server/server.js'),
    output: {
        path: path.resolve(__dirname, '../dist/server'),
        filename: 'server.js',
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json']
    },
    externals: [nodeExternals()],
    module: {
        rules: [
            {
                test: /\.[jt]sx?$/,
                use: ['ts-loader']
            },
            {
                test: /\.css$/,//было лесс
                use: [
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                mode: 'local',
                                localIdentName: '[name]__[local]--[hash:base64:5]',
                                // exportOnlyLocals: true,//fix
                            },
                            onlyLocals: true,//чтобы лоадер не собирал глобальные стили на сервере. На сервере стили не нужны, главное только селекторы.
                        }
                    },
                'less-loader',
                ],
                exclude: GLOBAL_CSS_REGEXP,
            },
            {
                test: GLOBAL_CSS_REGEXP,
                use: ["сss-loader"]
            },
            // {
            //     test: /\.(png|jpe?g|gif)$/i,
            //     use: [
            //         {
            //             loader: 'file-loader',
            //         },
            //     ],
            // },
            // {
            //     test: /\.svg$/,
            //     use: ['@svgr/webpack'],
            // },

        ]
    },
    optimization: {
        minimize: false, //отключить минимизацию
    },
    devtool: IS_DEV ? 'eval':false,
    plugins: [new DefinePlugin({'process.env.CLIENT_ID':`'${process.env.CLIENT_ID}'`})]
};

