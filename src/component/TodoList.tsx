import React, { FormHTMLAttributes, useState } from "react";
import { useForm } from "react-hook-form";
const TodoList = () => {
  const { register, watch, handleSubmit, formState } = useForm();
  console.log(register("toDo"));
  const onValid = (data: any) => {
    console.log(data);
  };
  console.log(watch());
  console.log(formState.errors);
  return (
    <>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(onValid)}
      >
        <input {...register("email", { required: true })} placeholder="Email" />
        <input
          {...register("firstName", { required: true })}
          placeholder="First Name"
        />
        <input
          {...register("lastName", { required: true })}
          placeholder="Last Name"
        />
        <input
          {...register("username", { required: true, minLength: 10 })}
          placeholder="Username"
        />
        <input
          {...register("password", { required: true, minLength: 5 })}
          placeholder="Password"
        />
        <input
          {...register("password1", {
            required: "Password is required",
            minLength: {
              value: 5,
              message: "Your password is too short.",
            },
          })}
          placeholder="Password1"
        />
        <button>Add</button>
      </form>
    </>
  );
};

export default TodoList;
