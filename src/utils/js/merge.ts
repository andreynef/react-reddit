//ф обьединяющая внутренности 2 обьектов. merge(obj1)(obj2)
export function merge<O extends object>(obj1:O) {
  return <K extends object>(obj2: K) => ({
    ...obj1,
    ...obj2,
  })
}

// export function mergeNoTs(obj) {
//   return (obj2) => ({
//     ...obj,
//     ...obj2,
//   })
// }