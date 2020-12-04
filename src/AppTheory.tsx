import React from 'react';
import './main.global.css';
import {hot} from "react-hot-loader/root";
import {Layout} from "./shared/Layout";
import {Content} from "./shared/Content";
import {addRandomId, generateRandomString} from "./utils/react/generateRandomId";
import {getValue} from "./utils/react/pickFromSyntheticEvent";
import {GenericListTheory} from "./5.theory/GenericListTheory";
import {merge} from "./utils/js/merge";
import {CardListTheory} from "./shared/CardsList/CardListTheory";
import {DropdownTheory} from "./6.theory/DropdownTheory";

//Прога по генерации шаблонов компонент (установка: npm install -g yo generator-react-ts-component-dir):
//В консоли набрать: yo react-ts-component-dir BLABLAComp ./src/shared. Пример 'yo react-ts-component-dir [component_name] [path] [--styles] [--less] [--sass]'

const LIST = [//какой-то приходящий лист со стороны для примера.
  { text: 'some1'},
  { text: 'some2'},
  { text: 'some3'},
  { text: 'some4'},
].map(addRandomId)//к кажд элементу будет добавлен 'id'

function AppComponentTheory() {
  // const [isVisible, setIsVisible] = React.useState(false);//для примера с MyHooksUseEffectComponent
  const [title, setTitle] = React.useState('empty');//для примера с MyHooksUseEffectComponent
  const [listState, setListState] = React.useState(LIST);
  const [modalState, setModalState] = React.useState(false);

  const handleItemClick = (id:string)=> {
    setListState(listState.filter((item)=>item.id !== id));
  }

  const handleAdd = ()=>{//push мутирует состояние, поэтому concat.
    setListState(listState.concat(addRandomId({text: generateRandomString()})));
  }

  return (
    <Layout>
      {/*<Header/>*/}
      <Content>
        {/*<CardList />*/}
        {/*<button onClick={()=>setIsVisible(!isVisible)}>Change me!</button>*/}
        <input type={'text'} onChange={getValue(setTitle)}/>
        {/*{isVisible &&*/}
        {/*  <MyHooksUseEffectComponent title={title} id='12'/>*/}
        {/*}*/}
        {/*<GenericListTheory list={LIST} onClick={console.log} /> //вариант с глоб онкликом. Выводится id при онклике*/}
        <GenericListTheory list={LIST.map(merge({ onClick:handleItemClick }))}  />{/*вариант с индивид онкликом*/}
        <button onClick={handleAdd}>Add element</button>
        {/*<UseEffectTestComponent title={'UseEffectTestComponent. prop title'}/>*/}
      </Content>
      <DropdownTheory
        button={<button>Test</button>}
        onClose={()=>console.log('closed')}
        onOpen={()=>console.log('opened')}
        isOpen={false}
      >
        <CardListTheory/>
      </DropdownTheory>
    </Layout>
  );
}

export const AppTheory = hot(()=> {
  return (
    <AppComponentTheory
    />
  )
});// HOC. Если используются Hooks, тобишь UseState итд
// export const App = hot(AppComponent);//если не используются Hooks.



















// {/*<DropdownNoAbsolute*/}
// {/*  onClose={()=>console.log('closed!!!')}//слушатели. Если закрыт то выполнить это.*/}
// {/*  onOpen={()=>console.log('opened!!!')}*/}
// {/*  // isOpen={false}//можно передать изначальное состояние*/}
// {/*  button={<button>dropdown button</button>}*/}
// // {/*>/!* Контейнер с логикой дропа *!/*/}
// {/*  <p>text1</p>/!*children*!/*/}
// {/*  <p>text2</p>/!*children*!/*/}
// {/*  <p>text3</p>/!*children*!/*/}
// {/*  <p>text4</p>/!*children*!/*/}
// </DropdownNoAbsolute>
// <Icon size={20} mobileSize={28} color={EColors.green} bold>Label1</Icon>
// <Break size={8} inline mobileSize={16}/>
// <Icon size={20}>Label2</Icon>
// <Break size={8} top/>
// <Icon size={20} mobileSize={10}>Label3</Icon>
