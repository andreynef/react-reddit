import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {App} from "../App";
import {AppTheory} from "../AppTheory";

window.addEventListener('load', ()=>{//тк будем подключать ssr, то нужно сделать чтобы Эта часть кода срабатывала только в браузере, поэтому обработчик.
//render удаляет всю разметку кот была до этого. А нужно чтобы реакт прикрепил текущ комп к уже нарисованной разметке, поэтому меняем render на hydrate
    ReactDOM.hydrate(<App />, document.getElementById('react_root'));
    // ReactDOM.hydrate(<AppTheory />, document.getElementById('react_root'));
});
