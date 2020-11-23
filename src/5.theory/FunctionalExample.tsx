import React from "react";
import {preventDefault} from "../utils/react/preventDefault";
import {stopPropagation} from "../utils/react/stopPropagation";
import {getChecked, getValue} from "../utils/react/pickFromSyntheticEvent";

// //Карирование - вычисление аргументов функции по мере ее вызывания. Все что слева остается в буфере/замыкании, потом правая финализирует результаты и свое действо

const add = (first:number) =>//ф кот возвращает...
  (second:number) => first + second;//...др ф, кот в свою очередь возвращает результат вычесленный с участием своего аргумента (second) и предыдущего (first) который был использован ранее и остался в замыкании.
add(1)(2);// -> 3

const addSameShit=(firstBracket:number)=>{
  const insideFnWithFutureComingArgument = (nextBracket:number) => firstBracket + nextBracket;
  return insideFnWithFutureComingArgument
}

addSameShit(1)(2);// -> 3
  //работа идет слева направо - сначала срабатывает add(1) и возвращает какой-то результат 'result', который будет использоваться в следующем шаге как первый агрумент add(result,2).
  //работа идет слева направо - сраб add(1) и возвращает какую-то ф-результат 'result()', кот потом захватит вторую скобку как аргумент и вернет общий результат используя первый аргумент сохраненный в замыкании и второй полученый в след шаге.

const addOne = add(1);// задание готового первого шага. В итоге addOne равен возвращенной ф result (ф имеющая у себя в замыкании 1 и ждущая свой аргумент чтобы совершить действо).
addOne(100);// -> 101. Тоесть resultOfAdd(100)

window.addEventListener('resize', ()=>{})//пример, тоже ф высш порядка тк это ф возвр ф listener

function addEventListenerWithDispose(element:any, name:any, handler:any){
  element.addEventListener(name, handler);
  return ()=> element.removeEventListener(name, handler);
}

const dispose = addEventListenerWithDispose(window, 'resize', ()=>{
  console.log('resized');
  dispose();
})

// //-------пример 1--------

interface IBlockProps {
  title: string;
  id: string;
}
function Feed(props:{blocks:IBlockProps[]}){//компонент Feed рендерит множество блоков
   return (
     <div>
       {props.blocks.map(withIdKey(Block))}{/*//размапить компоненты, предварительно прогнав их через ф присваивающую к кажд компоненте Id как ключ.*/}
     </div>
     // <div>
     //   {props.blocks.map((block:IBlockProps) =>//рендеринг в цикле. Размапить компоненты.
     //    <Block
     //     key={block.id}//при рендере компонентов нужно указ key
     //     {...block}
     //    />
     //   )}
     // </div>
   );
 }

function Block(props:IBlockProps) {
  return (
    <div>{props.title}</div>
  )
}

const withIdKey = withKey('id');//ф кот возвр др ф с переданным указанием/аргументом что этот аргумент будет испся как ключ.
const withIndexKey = withKey();//ф WithKey помогает разгрузить код и сделать его более расширяемым.

//что нужно от ф withKey? Чтобы она взяла из массива данных (props.blocks кот приходят пропсами для Feed) определенный атрибут ('id') и назначить его в кач ключа нашему компоненту Block.

function withKey(key?: string) {//ф принимающая строковый ключ...
  return <E extends IBlockProps, T extends React.ComponentType<E>>(component: T) =>//...и кот возвращает ф 2го шага 'будет withIdKey(Block)', понимая через типизацию что это реакт комп Block и вытаскивая его пропы с интерфейсом IBlockProps. Эта ф withIdKey(Block) возвращает 3ю ф(callback) кот примет в себя map "map(result)"
    (props: E, index: number) =>//map принимает этот callback и передаст ему наши св-ва props и index каждого элемента в массиве props.blocks. 3 аргумент(массив) пропущен.
      React.createElement(//рендерим элемент используя наши пропы и наш нов ключ кот мы изготовим из id. Ф рендера React.createElement(attr)
        component,//1й арг это компонент
        { ...props , key: key ? props[key as keyof E] : index},//2й арг это св-ва кот берем из пришедших сверху props (деструктурируя их), добавляя к ним prop "key". Если есть key то вставляем его, а если нет то вставляем туда значение индекса.
        [],//3й арг это массив детей кот нет.
        //Ф рендера React.createElement(attr) тжсм <Block {...props} />. Обычно исп так но здесь в ф
      );
}

//-------пример 2--------


function Input({onChange, value}: {onChange: (value: string) => void, value: string}) {
  return (
    <input value={value} onChange={getValue(onChange)} />
  )
}

function Checkbox(props: {onChange:(value:boolean)=> void, value:boolean}) {
  return (
    <input type="checkbox" checked={props.value} onChange={getChecked(props.onChange)} />
    // тжсм
    // <input type="checkbox" checked={props.value} onChange={(e)=>props.onChange(e.currentTarget.checked)} />
  )
}

//-------пример 3--------

interface InputProps {
  onChange: (value: string) => void;
  value: string;
}

function Input2({value, onChange}: InputProps) {
  return (
    <input value={value} onChange={preventDefault(stopPropagation(getValue(onChange)))}/>//композиция
  )
}