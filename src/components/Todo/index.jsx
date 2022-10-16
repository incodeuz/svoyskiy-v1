import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo } from "../../store/todoSlice";
import TrashBox from "../../assets/icons/bin.png";
import Edit from "../../assets/icons/pencil.png";
import "../../App.css";

const Todo = () => {
  const [data, setData] = useState("");
  const dispatch = useDispatch();
  const datas = useSelector((state) => state.todo.data);

  const addTodoBla = (data) => {
    setData("");
    if (data.length > 0) dispatch(addTodo(data));
  };

  return (
    <div className="container">
      <div className="container">
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
          <div className="btnCon debba">
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
        {datas?.map((v, i) => {
          return (
            <div key={v.id} className="content">
              <div>
                <p>{i + 1}</p>
                <p>{v.title}</p>
              </div>

              <div className="btnCon">
                <button
                  className="deleteBtn"
                  onClick={() => dispatch(deleteTodo(v.id))}
                >
                  <img style={{ width: "25px" }} src={TrashBox} />
                </button>
                <button
                  className="deleteBtn"
                  style={{
                    background: "#424242",
                    marginLeft: "6px",
                  }}
                >
                  <img style={{ width: "25px" }} src={Edit} />
                </button>
              </div>

              <input type="text" placeholder="edit title" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Todo;
