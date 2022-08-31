import React from "react";
import "./App.css";
import Hello from "./components/Hello";
import TodoApp from "./components/todo/TodoApp";

function App() {
  const o = { asd: "1", dsa: 2 };
  const arr = [1, 2, 3];
  // const n = 44;
  return (
    <>
      <TodoApp />
      {/* <Hello
        name="Davit"
        someNumber={44}
        asd
        dsa="d"
        someObj={o}
        someArr={arr}
      /> */}
    </>
  );
}

export default App;
