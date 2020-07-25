// 2. Работа с интерфейсами
// Напишите интерфейс для описания следующих данных

const MyHometask2: myHomeTask3 = {
  howIDoIt: "I Do It Well",
  someArray: ["string one", "string two", 42],
  withData: [
    {
      howIDoIt: "I Do It Well",
      someArray: ["string one", 23],
    },
    {
      howIDoIt: "I Do It Deep",
      someArray: [1,5,6,8],
      withData: { // Считаю что класть "себя" в "себя" (родителя в дети) нельзя  - ошибка
        howIDoIt: "I am child",
        someArray: []
      }
    }
    ]
}

// Ответ:
//В задании написано только "работа с интерфейсами", поэтому понимаю, что тут не нужно никаких <> и keyof.

// 1 вариант
interface IPart {
  howIDoIt: string;
  someArray: (string | number)[];
}

interface myHomeTask {
  howIDoIt: string;
  someArray: (string | number)[];
  withData: IPart[];
}

// 2 вариант
interface myHomeTask2 {
  howIDoIt: string;
  someArray: (string | number)[];
  withData?: myHomeTask2[];
}

// 3 вариант. Хз как создать массив содержащий обьекты, кот содержат свои же свойства.
interface myHomeTask3 {
  howIDoIt: string;
  someArray: (string | number)[];
  withData: myHomeTask3['howIDoIt'] | myHomeTask3['someArray'][];
}


// 6*. Работа с Generic, Mapped Types, Type inference №2
// Напишите такой тип TGetJSXPropsProp, который извлекает все HTML свойства, доступные для любого jsx элемента.
type TDivElement = JSX.IntrinsicElements['div'];// Этот тип описывает все свойства, доступные для HTMLDivElement.
type TDivProps = TGetJSXPropsProp<'div'>;

// Ответ:

//"1 шаг - тут попробуйте сделать такой тип, который бы вытаскивал тип из InstinsicElements по ключу. Т.е. чтобы TDivProps работал аналогично как и TDivPropsSimple (type TDivPropsSimple = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;)"

//Он уже показан в задании (TDivElement = JSX.IntrinsicElements['div']). И наведя на эти типы Webstorm выдает одинаковые результаты.

// 2й шаг?
// В задании просят извлечь все свойства (ключ:значение) доступные для любого элемента. Из интерфейса Intrinsic я вынимаю значение ключа Div. И получается, что то значение превращается снова в обьект с ключом и значением?

type TGetJSXPropsProp<K> = {//K = 'div' ибо должно быть так - TGetJSXPropsProp<'div'>
  [N in K]: K[N] // перебрать ключи в ключе К, он же Div, и выдать их значения.
}

//или

type TGetJSXPropsProp = Extract<JSX.IntrinsicElements, TDivElement> //но без <>

















const props:  TDivProps = {
  some: '1233', // throw error потому что не содержится в атрибутах div
  className: 'handler', // не выкидывает ошибку так как валидно для div элемента
}