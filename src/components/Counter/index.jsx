import React from "react";
import { decrement, increment } from "../../store/counterSlice";
import { useDispatch, useSelector } from "react-redux";
import "../../App.css";


const Counter = () => {
  const value = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div className="container btnCon">
      <button
        className="button"
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        ➕
      </button>
      <span>{value}</span>
      <button
        className="button"
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
      >
        ➖
      </button>
    </div>
  );
};

export default Counter;
