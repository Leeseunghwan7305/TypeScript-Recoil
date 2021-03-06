import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { categoryState, toDoSelector } from "../atoms";
import CreateToDo from "../CreateToDo/CreateToDo";
import ToDo from "./Todo";
//key 내부적으로 atom을 식별하는데 사용되는 고유한 문자열
//시스템에서 아톰들을 구분할때 변수명 x 키값 으로함
function ToDoList() {
  const toDos = useRecoilValue(toDoSelector);
  const [category, setCategory] = useRecoilState(categoryState);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value);
  };
  return (
    <div>
      <h1>To Do</h1>
      <hr />
      <select value={category} onInput={onInput}>
        <option value="TO_DO">To Do</option>
        <option value="DOING">Doing</option>
        <option value="DONE">Done</option>
      </select>
      <CreateToDo></CreateToDo>
      {toDos?.map((toDo) => (
        <ToDo key={toDo.id} {...toDo} />
      ))}
    </div>
  );
}

export default ToDoList;
