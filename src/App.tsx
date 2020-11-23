import React from 'react';
import './main.global.css';
import {hot} from "react-hot-loader/root";
import {Layout} from "./shared/Layout";
import {Content} from "./shared/Content";
import {CardList} from "./shared/CardsList";
import {addRandomId, generateRandomString} from "./utils/react/generateRandomId";
import {Menu} from "./shared/CardsList/Card/CardHeader/Menu";
import {Text} from "./shared/Text";
import {Break} from "./shared/Break";
import {Header} from "./shared/Header";
import {SortBlock} from "./shared/SortBlock";
import {MakeComment} from "./shared/modals/CardModal/MakeComment";
import {CardModal} from "./shared/modals/CardModal";
import {FactNActionsPanel} from "./shared/modals/CardModal/FactNActionsPanel.tsx";
import {HeaderModal} from "./shared/modals/CardModal/HeaderModal";
import {Card} from "./shared/CardsList/Card";
import styles from "./shared/SortBlock/sortblock.css";
import {ArrowIcon, RocketIcon} from "./shared/Icons";
import {EColors} from "./utils/enums/EColors";
import {Dropdown} from "./shared/Dropdown";
import {UseEffectTestComponent} from "./shared/UseEffectTestComponent";
import {getValue} from "./utils/react/pickFromSyntheticEvent";
import {MyHooksUseEffectComponent} from "./myHooks/useIsMounted";
import {assoc} from "./utils/js/assoc";

//Прога по генерации шаблонов компонент (установка: npm install -g yo generator-react-ts-component-dir):
//В консоли набрать: yo react-ts-component-dir BLABLAComp ./src/shared. Пример 'yo react-ts-component-dir [component_name] [path] [--styles] [--less] [--sass]'

const someState = {
  openedThread: 'private',
  bookmark: 'myPosts',
  list: [
    {author:'Pupkin Who', date: '2 months ago', avatar: 'url1', title: 'Реализация намеченных плановых заданий', karma: '255', commentsAmount: 2, isSaved: false},
    {author:'Pupkin Why', date: '1 months ago', avatar: 'url2', title: 'some title2', karma: '234', commentsAmount: 3, isSaved: true},
    {author:'Pupkin What', date: '3 months ago', avatar: 'url3', title: 'some title3', karma: '46', commentsAmount: 4, isSaved: true},
    {author:'Pupkin Where', date: '2 year ago', avatar: 'url4', title: 'some title4', karma: '56756', commentsAmount: 5, isSaved: false},
    {author:'Pupkin When', date: '5 months ago', avatar: 'url5', title: 'some title5', karma: '67867766', commentsAmount: 6, isSaved: true},
  ].map(addRandomId)//к кажд элементу будет добавлен 'id'
}

const ass = someState.list.map(item=>item.id);
console.log(ass)

interface IAppComponentProps {
  openedThread: string;
  bookmark: string;
  list: {
    id: string;
    author: string;
    date: string;
    avatar: string;
    title: string;
    karma: string;
    commentsAmount: number;
    isSaved: boolean;
  }[];
}

function AppComponent({openedThread, bookmark,list}:IAppComponentProps) {

  return (
    <Layout>
      {/*<Header openedThread={openedThread} bookmark={bookmark}/>*/}
      <Content>
        <CardList list={list} openedThread={openedThread} bookmark={bookmark}/>
      </Content>
      {/*<CardModal isOpen={false} id={'some post id'}/>*/}
    </Layout>
  );
}

export const App = hot(()=> {
  return (
    <AppComponent
      openedThread={someState.openedThread}
      bookmark={someState.bookmark}
      list={someState.list}
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
