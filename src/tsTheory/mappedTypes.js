"use strict";
var mistake = []; // As - type casting, приведение к типу. Было Any, стало Array number.
mistake.push(1);
mistake.push('1'); //нельзя ибо тип определен только как number.
var bigObject = {
    "name": "js-frameworkreact",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
        "build:dev": "cross-env NODE_ENV=development webpack --config webpack.config.js",
        "build:prod": "cross-env NODE_ENV=production webpack --config webpack.config.js",
        "dev": "cross-env NODE_ENV=development node ./bin/dev.js",
        "test": "echo \"Error: no test specified\" && exit 1"
    },
    "author": "",
    "license": "ISC",
    "dependencies": {
        "cross-env": "^7.0.2",
        "express": "^4.17.1",
        "nodemon": "^2.0.4",
        "react": "^16.13.1",
        "react-dom": "^16.13.1"
    },
};
bigObject.author = 1; //присвоить число неполучится тк надо строку (TS сам определил предыдущий тип).
var typedBigObject = bigObject; //переложили перем bigObject в перем typedBigObject но при этом указали тип Readonly. Только первый уровень.
typedBigObject.dependencies = '23'; //не смогло изменить тк Readonly раб только с 1 уровнем (внешними ключами).
typedBigObject.dependencies.express = '23'; //смогло изменить
var typedBigObjectDeep = bigObject; //переопределить тип обьекта на Readonly. Но уже на все уровни.
typedBigObjectDeep.dependencies.express = '23'; //не может изменить тк установлено Readonly уже и на 2м уровне.
typedBigObjectDeep.dependencies = '23'; //не может изменить как и с просто Readonly 1го ур.
//проверим результат
function greaterThanZero(a, b) {
    return a > 0;
}
//type Parameters
//type ConstructorParameters
//type ReturnType
//type InstanceType
//...
//# sourceMappingURL=mappedTypes.js.map