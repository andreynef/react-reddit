import React from 'react';

export function stopPropagation<T extends (e: any) => void>(fn: T) {
  return <E extends React.SyntheticEvent<any>>(e: E) => {
    e.stopPropagation();
    fn(e);
  }
}

export function stopPropagationNoTs(someFn:any) {
  return (e:any) => {
    e.stopPropagation();
    someFn(e);
  }
}