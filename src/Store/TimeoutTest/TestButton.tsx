import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {IInitialState} from "../initialState";
import {timeoutTestThunk} from "./timeoutTestActions";
import {TestComponent} from "./TestComponent";

export function TestButton() {

  const dispatch = useDispatch();
  const timeout = useSelector<IInitialState,boolean>(state => state.timeout);

  const handleClick = () => {
    dispatch(timeoutTestThunk());
  }

  return (
    <button onClick={handleClick} style={{width:'150px', height:'20px', border: '1px solid black', backgroundColor:'yellow', borderRadius:'10px', position:'absolute', top:'30px', left: '100px', zIndex:1000, }}>
      test redux timeout
      {timeout && <TestComponent/>}
    </button>
  );
}
