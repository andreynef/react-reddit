import React from "react";
import {UseEffectTest} from "../shared/UseEffectTest";

// Какие бывают хуки: (Не работают на сервере)
//
// 1. useState
// 2. useEffect
// 3. useMemo
// 4. useRef
// 5. useReducer
// 6. useContext
// 7. useCallback
// 8. useImperativeHandele
// 9. useLayoutEffect
// 10. useDebugValue

// 1. useState. Взято из 4.Theory StarWarsNameFunction

const [state, setState] = React.useState({name: 'Andrey', count: 0});//установка первоначального state таким вот образом [state, setState].
const handleClick = () => {
  setState((prevState) => ({...prevState, name: 'someoneElse'}));//установка нов состояния. SetState((что было)=>(что будет))
  setState((prevState) => ({...prevState, count: prevState.count + 1}));
};
console.log('>>', state.count);

// 2. useEffect.         (не работают на сервере. Mount'ы там не происходят. Нельзя использовать с if + вкладывать эффекты в эффекты, тк запоминается очередность выполнения и состояния, иначе будут ошибки)

// React.useEffect(). Всегда вызывается при первом рендере. Принимает в себя 2 аргумента (effect,deps),тобишь ф и за чем следить.

export function MyHooksUseEffect({title, id}: {title:string, id?: string}) {

//вариант без deps. Выполняется кажд раз при рендере и перерендере.
  React.useEffect(()=>{
    console.log('componentDidMount');
    console.log('componentWillUpdate');
  })

//вариант с пустым deps. Выполняется только при первом рендере. Слежка за ничем = все время undefined = отработает только 1 раз.
  React.useEffect(()=>{
    console.log('componentDidMount');
  }, [])//говорим что мы следим за чем-то, соотв componentWillUpdate не выполняется

//вариант с пустым deps и ретурном. + выше и Если указать callback в return, то этот callback будет вызываться перед Unmount'ом.
  React.useEffect(()=>{
    console.log('componentDidMount');
    return ()=>{//
      console.log('componentWillUnmount');//что-то сделать при закрытии или удалении компонента из дом.
    }
  }, [])

//вариант с deps Title. Выполняется при каждом изменении Title. При первом рендере он изменится с undefined на title. Undefined, потому-что сперва рендерится а потом принимаются пропы.
  React.useEffect(()=>{
    console.log('componentDidMount = componentWillReceiveProps:', title);
  }, [title])

  const [isMounted]= useIsMounted();
  React.useEffect(()=>{
    console.log('isMounted', isMounted);
  }, [isMounted])//следит за этим состоянием. Если без deps, то будет рендериться при любом изменении компонента. С ним же, он меняется только когда он true or false.

  return (
    <>
      <div>{title} {id}</div>
      <UseEffectTest title={'some text'}/>
    </>
  )
}

//кастомный Hook, кот будет возвращать true когда комп примонтирован
function useIsMounted() {
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(()=> {//хотим чтобы isMounted стал true когда компонент примонтирован.
    setIsMounted(true);
  }, [])//указываем пустую зависимость и б срабатывать только на componentDidMount

  return [isMounted];//можно без [] но так использует React.
}

//---------------------------------

// 3. useMemo
//запоминает вычисление и не выполняется кажд раз. Используется для сложных вычислений

function calculate(items: number, multiplier:number) {
  return new Array(items).fill(1).reduce((a,v)=> a*multiplier)
}

export function MyHooksMemo({title, id}: {title:string, id?: string}) {
  const items = 10;
  const multiplier = 5;
  const result = React.useMemo(
    ()=> {
      console.log('CALC')
      calculate(items,multiplier)
    },
    [items,multiplier]
  )


  return (
    <div>{title} {id} {result}</div>
  )
}

