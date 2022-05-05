import React from "react";
import { useSetRecoilState } from "recoil";
import { IToDo, toDoState } from "../atoms";

const Todo = ({ text, category, id }: IToDo) => {
  const setToDos = useSetRecoilState(toDoState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      const newToDo: IToDo = { text, id, category: name as any };
      console.log(...oldToDos.slice(0, targetIndex));
      return [
        ...oldToDos.slice(0, targetIndex),
        newToDo,
        ...oldToDos.slice(targetIndex + 1),
      ];
    });
  };
  return (
    <div>
      <li>
        <span> {text}</span>
        {category !== "DOING" && (
          <button name="DOING" onClick={onClick}>
            Doing
          </button>
        )}
        {category !== "TO_DO" && (
          <button name="TO_DO" onClick={onClick}>
            To_Do
          </button>
        )}
        {category !== "DONE" && (
          <button name="DONE" onClick={onClick}>
            Done
          </button>
        )}
      </li>
    </div>
  );
};

export default Todo;
