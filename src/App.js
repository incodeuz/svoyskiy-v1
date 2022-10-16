import React from "react";
import Todo from "./components/Todo";
import { Routes, Route } from "react-router-dom";
import Counter from "./components/Counter";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/todo" element={<Todo />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
