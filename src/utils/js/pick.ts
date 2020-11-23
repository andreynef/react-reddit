// Вспомогательная ф. Забирает из обьекта св-ва.

export function pick<K extends string>(prop:K) {
  return <O extends Record<K, any>>(objOfExecution:O)=>objOfExecution[prop]
}