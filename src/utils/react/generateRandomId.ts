//nanoid библиотека по генерации уник ID. Более надежна если есть большие списки.

import {assoc} from "../js/assoc";// ф кот возвращает ф возвращающая обьект с доп ключом со значением value ([key]: value). Принимает 2 арг: key, value.

export const generateRandomString = ()=> Math.random().toString(36).substring(2,15);

export const assignRandomId = assoc('id', generateRandomString());//вызов ф один раз. Вернет функцию с ожидающим принимающим аргументом в виде обьекта к которому в дальнейшем нужно будет добавить доп ключ 'id' с уже сгенерированным значением generateRandomString().

export const addRandomId = <O extends object>(someObj: O) => assoc('id', generateRandomString())(someObj);//ф возвр ф assignRandomId
  // = export const addRandomId = assoc('id', generateRandomString())(someObj)

