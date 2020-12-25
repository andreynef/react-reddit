import React, {useContext, useEffect, useRef, useState} from 'react';
import styles from './cardlist.css';
import axios from "axios";
import {useSelector} from "react-redux";
import {Card} from "../../shared/CardsList/Card";
import {IInitialState} from "../../Store/initialState";

export function PostListWithRequest() {

  const token = useSelector<IInitialState>(state => state.token)//достать токен из store
  const [list, setList] = useState<any>([]);//создание своего локального стейта
  const [isLoading, setIsLoading] = useState(false);
  const [errorLoading, setErrorLoading] = useState('');
  const [afterFromResponse, setAfterFromResponse] = useState('');

  const bottomReached = useRef<HTMLDivElement>(null);

  useEffect(()=>{//отдельный хук по проверке достижения днища.
    async function load() {//асинхронная ф подгрузки.
      setIsLoading(true);
      setErrorLoading('');
      try {
        // в доке https://www.reddit.com/dev/api#GET_best есть опции after, before, count, limit, show, sr_detail.
        const {data:{data:{after, children}}} = await axios.get('https://www.reddit.com/rising',{// в доке https://www.reddit.com/dev/api#GET_best
          headers:{Authorization: `bearer ${token}`},
          params:{
            limit:10,
            after:afterFromResponse,
          }
        });
        setAfterFromResponse(after);//сохраняем ссылку дабы далее при подгрузке отталкиваться от нее
        // setList(children);//сохраняем приходящ список. НО. Он будет перезатирать сущ список тк не передается after...
        //чтобы не добавлять children в зависимость от этого эффета реакт предлагает такой синтаксис (передача колбэков внутри сеттеров):
        //арг prevChildren это предвдущ состоояние этого стейта и "=>" добавление туда каких-то данных.
        //иззf того что предыдущ сост берем из аргумента то оно не является зависимостью эффекта!                                                                   !!!
        setList((prev: string | any[]) => prev.concat(...children));//...поэтому чтобы он обновлял такой реакт синтаксис. К предыдущ добавлять следующ.
        // const response = await axios.get('https://www.reddit.com/rising')// либо...
        // setList(response.data.data.children)// ...так
      } catch (error) {
        setErrorLoading(String(error))
      }
      setIsLoading(false);
    }
    const observer = new IntersectionObserver((entries)=>{//создать конструктор внутри кот лежит ф подгрузки
      if (entries[0].isIntersecting){//в entries входит список всех наблюдаемых элементов. Наблюдаем только за 1 элементом (лежит в нулевой позиции [0]) то у него можно получить метод isIntersecting, тобишь этот элемент на сранице виден.
        load();
      }
      console.log('load more');
    },{
      rootMargin:'100px',//расстояние от дна окна.
    });

    if(bottomReached.current){
      observer.observe(bottomReached.current)
    }
    return ()=>{
      if(bottomReached.current){//при достижении второго раза элемента bottomReached, отписаться от старого и идет след прогон. Хз но както так.
        observer.unobserve(bottomReached.current)
      }
    }
  },[token,bottomReached.current, afterFromResponse])//поскольку есть внешняя зависимость то указываем ее сюда. Как только меняется ссылка на элемент то эффект пересоздается. -> создаем отписку + слежка за параметром after

  return (//4 варианта исхода. Оптимальный стандарт:

    <ul className={styles.cardList}>

      {list.length === 0 && !isLoading && !errorLoading &&(//--------------!!!!!!!!!!
        <div role={'alert'} style={{textAlign:'center'}}>
          Нет ни одного поста
        </div>
      )}

      <div ref={bottomReached}/>

      {list.map((item:any)=>(
        {
          id:item.id,
          children: <Card item={item}/>,
        }
      ))}

      {isLoading && 'загрузка'}

      {errorLoading && (//див в роли алерта!!! Карл!!!                           !!!
        <div role={'alert'} style={{textAlign:'center'}}>
          {errorLoading}
        </div>
      )}

    </ul>
  )
}