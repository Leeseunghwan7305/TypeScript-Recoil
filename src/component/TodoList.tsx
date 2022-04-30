import React, { FormHTMLAttributes, useState } from "react";
import { useForm } from "react-hook-form";
const TodoList = () => {
  const { register, watch } = useForm();
  console.log(register("toDo"));
  console.log(watch());
  return (
    <>
      <form>
        <input {...register("Email")} placeholder="Email" />
        <input {...register("id")} placeholder="Email" />
        <input {...register("password")} placeholder="Email" />
        <button>Add</button>
      </form>
    </>
  );
};

export default TodoList;
