// ф кот возвращает ф возвращающая обьект с доп ключом со значением value. [key]: value.

export function assoc<K extends string, T>(key:K, value:T) {
  return <O extends object>(obj: O) => (
    {...obj, [key]: value}
  ) as K extends keyof O ? (Omit<O, K> & Record<K, T>) : (O & Record<K, T>)
}

export function assocNoTs(key:any, value:any) {
  return (someObj:any) => ({
    ...someObj,
    [key]: value,
  })
}