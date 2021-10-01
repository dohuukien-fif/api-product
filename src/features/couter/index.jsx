import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increat, decreat } from './component/couterSclice';
export default function Index() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  console.log(counter);
  const hanledoClickss = () => {
    const action = increat(5);
    dispatch(action);
  };
  return (
    <div>
      <button onClick={hanledoClickss}>click</button>
      <h1>kien dep trai : {counter}</h1>
    </div>
  );
}
