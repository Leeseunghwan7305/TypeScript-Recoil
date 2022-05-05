import { useForm } from "react-hook-form";
import { atom, useRecoilState, useRecoilValue } from "recoil";
import { toDoState } from "../atoms";
import CreateToDo from "../CreateToDo/CreateToDo";
import Todo from "./Todo";

//key 내부적으로 atom을 식별하는데 사용되는 고유한 문자열
//시스템에서 아톰들을 구분할때 변수명 x 키값 으로함
function ToDoList() {
  const toDos = useRecoilValue(toDoState);

  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <CreateToDo></CreateToDo>
      <ul>
        {toDos.map((toDo) => (
          <Todo key={toDo.id} {...toDo}></Todo>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
