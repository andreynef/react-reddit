import React from "react";
import {shallow} from "enzyme";
import {DropdownTheory} from "../DropdownTheory";

//--- если нужно тесть комп использующие методы windows. Дольше тест. ---
// не работает при ssr.
// прописка частная а не глобальная в конфиге (там прописано 'node').
//   /**
//    * @jest-environment jsdom
//    */
//--------------------------------------------------------------

describe('Dropdown',()=>{
  test('should render',()=>{
    const wrapper = shallow(<DropdownTheory button={<button/>} children={<div/>}/> );
    expect(wrapper).toBeDefined();
    // console.log(wrapper.find('wewrwerfdg'));
    //ф find у wraper'a всегда возвр shallowWrapper кот мб пустым (ShallowWrapper {}), поэтому всегда возвр true.
    //чтобы посмотреть что именно происходит в shallowWrapper, у enzyme есть ф debug.
    // console.log(wrapper.find('div.container').debug());
    //проверим зарендерился ли компонент и сущ ли он.
    expect(wrapper.find('div.container').isEmptyRender()).toBeFalsy();//isEmptyRender возвр true если мы ничего не нашли и false если что-то нашли. Поэтому добавим еще toBeFalsy() кот проверяет получили ли мы false.
  });

  test('should render (snapshot)', ()=>{
    const wrapper = shallow(<DropdownTheory button={<button/>} children={<div/>}/> );
    //snapshot это создание скриншота компонента в папке __snapshots__ . При его изменении падает ошибка предлагающая заменить скрин на нов или исправить на предыдущ.
    expect(wrapper).toMatchSnapshot()
  })
});

//в enzyme проверка идет по узлам а в snapshot всем комплектом.
// enzyme надежнее а snapshot удобнее если разработчик один.
// тестами покрывается только логика. Верстка нет.
// если нужно проверить появл ли комп или нет то это можно сделать 1) через snapshot 2) чер enzyme метод find. На выбор как удобнее.