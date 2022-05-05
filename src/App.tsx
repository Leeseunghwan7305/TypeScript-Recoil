import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./reset";
import { darkTheme, lightTheme } from "./component/theme/theme";
import ToDoList from "./component/ToDoList/TodoList";

function App() {
  return (
    <ThemeProvider theme={true ? darkTheme : lightTheme}>
      <GlobalStyle />
      <ToDoList />
    </ThemeProvider>
  );
}

export default App;
