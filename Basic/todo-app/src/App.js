import { useState } from "react";

import TodoForm from "./TodoForm";
import ToDoList from "./TodoList";

import "./App.css";

function App() {
  const [todos, setTodo] = useState([]);

  return (
    <div className="app-container">
      <div className="todo-card">
        <h1>Todo List</h1>
        <TodoForm setTodo={setTodo} />
        <ToDoList todos={todos} setTodo={setTodo} />
      </div>
    </div>
  );
}

export default App;
