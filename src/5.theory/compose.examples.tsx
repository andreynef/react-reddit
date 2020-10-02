import * as React from "react";
import {preventDefault} from "../utils/react/preventDefault";
import {stopPropagation} from "../utils/react/stopPropagation";
import {getValue} from "../utils/react/pickFromSyntheticEvent";

//если быть совсем точным в типизации фй pipe, compose, filter итд, то можно использовать библиотеку Ramda. Npm i ramda @types/ramda.
// import * as R from 'ramda';
// const smth = R.pipe(x,y,z,etc);

function InputExample({value, onChange}: any) {
  return(
    <input
      value={value}
      // onChange={preventDefault(stopPropagation(getValue(onChange)))}
      onChange={compose(onChange, getValue, stopPropagation, preventDefault)}//выполнение фй справа налево
      // onChange={pipe(preventDefault, stopPropagation, getValue, onChange)}//выполнение фй слева направо
    />
  )
}

function compose<U>(...fns:Function[]) {//композиция кот исполняет ф поочереди справа налево. Эту ф предоставляет Redux.
  return <E,>(initialValue: any):U =>
    fns.reduceRight((previousValue, fn) => fn(previousValue), initialValue);
}

function pipe<U>(...fns:Function[]) {//композиция кот исполняет ф поочереди слева направо
  return <E,>(initialValue: any):U =>
    fns.reduce((previousValue, fn) => fn(previousValue), initialValue);
}

function pick<K extends string>(prop:K) {//забирает из обьекта св-ва
  return <O extends Record<K, any>>(objOfExecution:O)=>objOfExecution[prop]
}
const pickExample = pick('value')({value:'me', otherStuff:2})// -> 'me'. Пример ф pick.

function isEqual<T>(left:T) {//проверяет на равенство
  return <E extends T>(right:E)=> left===right;
}

function cond(b:boolean) {
  return !b;
}

const comments = [//есть какой-то массив комментов приходящий с бэкэнда
  {id:22, text:'textOne'},
  {id:23, text:'textTwo'},
  {id:24, text:'textThree'},
  {id:25, text:'textFour'},
  {id:26, text:'textFive'},
  {id:27, text:'textSix'},
];
//нужно убрать коммент с id 22.
const filteredComments = comments.filter(({id})=>id!==22);//спрашивать кажд элемент на то, что он не равен 22. В итоге вернется новый массив без id 22.
const filteredComments2 = comments.filter(pipe(pick('id'), isEqual(22)));//Вариант через композицию, pipe, слева направо чер запятую. Получу все элементы с id 22. (взять id -> равен 22?-true -> вернуть в массив).
const filteredComments3 = comments.filter(pipe(pick('id'), isEqual(22), cond));//Вариант через композицию. Получу все элементы КРОМЕ id 22. (взять id -> равен 22?-true -> поменять на false -> вернуть в массив).
const filterWithId = (id:number)=>pipe(pick('id'), isEqual(id), cond);//вынесем эту композицию в еще 1 ф, чтобы можно было ее использовать отдельно и для дальнейшего упрощения/сокращения кода
const filteredComments4 = comments.filter(filterWithId(22));//сокращенная запись filteredComment3
//но и это еще не все! Получите еще одну универсальную упаковку в подарок.->
const createFilterBy = (prop:string)=>(id:number)=>pipe(pick('id'), isEqual(id), cond);//теперь сокращаем еще
const filterWithId2 = createFilterBy('id');//сокр запись filterWithId
const filterWithId22 = createFilterBy('id')(22);//применено сразу id 22.
// const filteredComments5 = comments.filter(pipe(pick('id'), isEqual(22), cond));//Получу все элементы кроме с id 22.
// const filteredComments6 = comments.filter(filterWithId(22));//Получу элементы только с id 22.

//-------------

const getValueNumber = pipe<number>(pick('currentTarget'), pick('value'), parseInt)//композиция кот возвращает номер. Взять св-во currentTarget, потом из результата взять св-во value, потом над результатом выполнить ф parseInt. Можно использовать простую типизацию как тут либо загрузить более полную из библиотеки Ramda.

