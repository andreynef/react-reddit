// // 2. Работа с интерфейсами
// // Напишите интерфейс для описания следующих данных
//
// const MyHometask2: myHomeTask3 = {
//   howIDoIt: "I Do It Well",
//   someArray: ["string one", "string two", 42],
//   withData: [
//     {
//       howIDoIt: "I Do It Well",
//       someArray: ["string one", 23],
//     },
//     {
//       howIDoIt: "I Do It Deep",
//       someArray: [1,5,6,8],
//       withData: {
//         howIDoIt: "I am child",
//         someArray: []
//       }
//     }
//     ]
// }
//
// // Ответ:
//
// // 1 вариант
// interface IPart {
//   howIDoIt: string;
//   someArray: (string | number)[];
// }
//
// interface myHomeTask {
//   howIDoIt: string;
//   someArray: (string | number)[];
//   withData: IPart[];
// }
//
// // 2 вариант - правильный
// interface myHomeTask2 {
//   howIDoIt: string;
//   someArray: (string | number)[];
//   withData?: myHomeTask2[];
// }
//
// // 3 вариант.
// interface myHomeTask3 {
//   howIDoIt: string;
//   someArray: (string | number)[];
//   withData: Pick <IMyHomeTask3, 'howIDoIt' | 'someArray'>[];
// }



// 6*. Работа с Generic, Mapped Types, Type inference №2
// Напишите такой тип TGetJSXPropsProp, который извлекает все HTML свойства, доступные для любого jsx элемента.
type TDivElement = JSX.IntrinsicElements['div'];// Этот тип описывает все свойства, доступные для HTMLDivElement.
type TDivProps = TGetJSXPropsProp<'div'>;

// Ответ:

type TTargetDiv = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;// =TDivElement
// вынимаю React.HTMLAttributes<HTMLDivElement> ( он же 'T<>' в схеме xxx<T<yyy>, yyy>;)
type TGetJSXPropsProp<T extends keyof JSX.IntrinsicElements> =//<тип ключа 'div' расширяющий все ключи JSX элементов в базе
  JSX.IntrinsicElements[T] extends React.DetailedHTMLProps<infer E, any> ? E : never;//этот тип ключа 'div' расширяет свой источник? (конечно да ибо показал сам себя) то заглядываем в угловые скобки ('<T<yyy>, yyy>') обозначаем заводской функцией 'infer E' левую часть выражения, а правую 'any' (тк оно не важно, но должно быть указано тк в источнике 2 значения), и возвращаем то что ищем 'E' (он же React.HTMLAttributes<HTMLDivElement>) иначе 'never' тк оно никогда не случится ибо ответ условия очевиден и не существует др ответов кроме как 'да'.

const props: TDivProps = {
  some: '1233', // throw error потому что не содержится в атрибутах div
  className: 'handler', // не выкидывает ошибку так как валидно для div элемента
}