"use strict";
// 1.Напишите тип функции, конкатенирующей две строки
// concat('Hello ', 'World') // -> Hello World;
// 2. Работа с интерфейсами
// Напишите интерфейс для описания следующих данных
var MyHometask = {
    howIDoIt: "I Do It Well",
    someArray: ["string one", "string two", 42],
    withData: [{ howIDoIt: "I Do It Well", someArray: ["string one", 23] }],
};
var homeTask = {
    externalData: {
        value: 'win'
    }
};
// 5*. Работа с Generic, Mapped Types, Type inference №1
// Напишите такой тип, который извлечет тип props из этого или любого другого React компонента. Подсказка: любой реакт компонент расширяет React.ComponentType<Props>
function HomeComponent(props) {
    return (React.createElement("div", null, props.firstProp));
}
var props = {
    some: '1233',
    className: 'handler',
};
//# sourceMappingURL=DZ3.js.map