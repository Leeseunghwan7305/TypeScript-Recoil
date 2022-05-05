import React from "react";
import { IToDo } from "../atoms";

const Todo = ({ text }: IToDo) => {
  return (
    <div>
      <li>
        <span> {text}</span>
        <button>To Do</button>
        <button>Doing</button>
        <button>Done</button>
      </li>
    </div>
  );
};

export default Todo;
