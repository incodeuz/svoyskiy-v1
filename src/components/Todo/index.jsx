import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo, updateTodo } from "../../store/todoSlice";
import TrashBox from "../../assets/icons/bin.png";
import Edit from "../../assets/icons/pencil.png";
import Check from "../../assets/icons/accept.png";
import "../../App.css";

const Todo = () => {
  const [settings, setSettings] = useState({
    btn1: false,
    id: null,
  });
  const [updatedTitle, setUpdatedTitle] = useState("");
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
          <div className="btnCon debba">
            <input
              style={{
                marginRight: "10px",
              }}
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
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <p
                    style={{
                      fontSize: "10px",
                      padding: "0 3px",
                      borderRadius: "4px",
                      background: "white",
                      color: "#424242",
                      width: "fit-content",
                    }}
                  >
                    {i + 1}
                  </p>
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
                    {settings.btn1 && settings.id === v.id ? (
                      <img
                        style={{ width: "25px" }}
                        src={Check}
                        onClick={() => {
                          setSettings({ btn1: false, id: v.id });
                          dispatch(
                            updateTodo({
                              id: v.id,
                              title: updatedTitle,
                            })
                          );
                        }}
                      />
                    ) : (
                      <img
                        style={{ width: "25px" }}
                        src={Edit}
                        onClick={() => setSettings({ btn1: true, id: v.id })}
                      />
                    )}
                  </button>
                </div>
              </div>
              {settings.btn1 && settings.id === v.id && (
                <div
                  style={{
                    marginTop: "10px",
                  }}
                  className="btnCon"
                >
                  <input
                    value={v.title}
                    onChange={(e) => setUpdatedTitle(e.target.value)}
                    className="button"
                    type="text"
                    placeholder="edit title"
                    style={{
                      color: "#424242",
                      marginRight: "5px",
                    }}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Todo;
