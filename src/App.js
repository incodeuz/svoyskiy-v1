import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./store/counterSlice";
import { addTodo, deleteTodo } from "./store/todoSlice";
import TrashBox from "./assets/icons/bin.png";
import "./App.css";

const App = () => {
  const [btn, setBtn] = useState({
    btn1: false,
    btn2: false,
  });
  const [data, setData] = useState("");
  const dispatch = useDispatch();
  const value = useSelector((state) => state.counter.count);
  const datas = useSelector((state) => state.todo.data);

  const addTodoBla = (data) => {
    setData("");
    if (data.length > 0) dispatch(addTodo(data));
  };
  return (
    <div className="container">
      <div className="btnCon navbar">
        <button className="button" onClick={() => setBtn({ btn1: !btn.btn1 })}>
          Counter
        </button>
        <button className="button" onClick={() => setBtn({ btn2: !btn.btn2 })}>
          Todo App
        </button>
      </div>
      <div className="container">
        {btn.btn1 && (
          <div className="btnCon">
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
        )}
        <br />
        {btn.btn2 && (
          <div className="container btnConFirst">
            {/* {datas.length > 1 && (
              <div className="btnCon">
                <input
                  className="button"
                  type="text"
                  placeholder="search todos"
                />
                <select className="button">
                  <option value={"id"}>ID</option>
                  <option value={"Title"}>Title</option>
                </select>
                <button className="button">Search Todo</button>
              </div>
            )} */}
            <div className="btnCon">
              <input
                className="button"
                type="text"
                placeholder="add todo"
                value={data}
                onKeyPress={(e) => e.key === "Enter" && addTodoBla(data)}
                onChange={(e) => setData(e.target.value)}
              />
              <button className="button" onClick={() => addTodoBla(data)}>
                Add Todo
              </button>
            </div>
          </div>
        )}
        {datas?.map((v, i) => {
          return (
            <div key={v.id} className="content">
              <div>
                <p>{i + 1}</p>
                <p>{v.title}</p>
              </div>
              <p>
                <button
                  className="button deleteBtn"
                  onClick={() => dispatch(deleteTodo(v.id))}
                >
                  <img style={{width:"25px"}} src={TrashBox} />
                </button>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
