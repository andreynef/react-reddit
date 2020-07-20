
// 1.Напишите тип функции, конкатенирующей две строки
// concat('Hello ', 'World') // -> Hello World;

// Ответ:
type TsConcat = (...args:string[]) => string;

// 2. Работа с интерфейсами
// Напишите интерфейс для описания следующих данных

const MyHometask: myHomeTask = {
  howIDoIt: "I Do It Well",
  someArray: ["string one", "string two", 42],
  withData: [{ howIDoIt: "I Do It Well", someArray: ["string one", 23] }],
}
// Ответ:
interface myHomeTask {
  howIDoIt: string;
  someArray: [string, string, number],
  withData: [{howIDoIt: string, someArray: [string, number]}],
}

// 3. добавьте типизацию для метода reduce

interface MyArray<T> {
  [N: number]: T;
  // Ответ:
  reduce<U>(fn:(accumulator:T, value:T) => U): MyArray<U>;//хз
}

// 4. Работа с MappedTypes. Напишите такой MyPartial чтобы создание объекта homeTask стало возможным

interface IHomeTask {
  data: string;
  numbericData: number;
  date: Date;
  externalData: {
    basis: number;
    value: string;
  }
}
const homeTask: MyPartial2000<IHomeTask> = {
  externalData: {
    value: 'win'
  }
}

// Ответ:
type MyPartial2000<T> = {
  [N in keyof T]?: T[N] extends object ? MyPartial2000<T[N]> : T[N]
}

// 5*. Работа с Generic, Mapped Types, Type inference №1
// Напишите такой тип, который извлечет тип props из этого или любого другого React компонента. Подсказка: любой реакт компонент расширяет React.ComponentType<Props>

function HomeComponent(props:{firstProp: string;}) {
  return (
    <div>
      { props.firstProp }
    </div>
  )
}
type TProps= TMyType<typeof HomeComponent>;

// Ответ:
type TMyType<T> = T extends React.ComponentType<(infer E)> ? E : T;

// 6*. Работа с Generic, Mapped Types, Type inference №2
// Напишите такой тип TGetJSXPropsProp, который извлекает все HTML свойства, доступные для любого jsx элемента.
type TDivElement = JSX.IntrinsicElements['div'];// Этот тип описывает все свойства, доступные для HTMLDivElement.
type TDivProps = TGetJSXPropsProp<'div'>;

// Ответ пропущен ибо сложно:
//непонятная строка div: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
//либо Pick либо вот
type TGetJSXPropsProp<T> = {
  [N in keyof T]: T extends JSX.IntrinsicElements<(infer E)> ? E : T
}



const props: TDivProps = {
  some: '1233', // throw error потому что не содержится в атрибутах div
  className: 'handler', // не выкидывает ошибку так как валидно для div элемента
}