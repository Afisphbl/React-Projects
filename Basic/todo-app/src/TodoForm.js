import { useState } from "react";

function TodoForm({ setTodo }) {
  const [toDo, setToDo] = useState("");

  function inputHandler(e) {
    setToDo(e.target.value);
  }

  function addHandler() {
    setTodo((prev) => [
      ...prev,
      {
        checked: false,
        todo: toDo,
      },
    ]);

    setToDo("");
  }

  function clearHandler() {
    setToDo("");
  }
  return (
    <div className="todo-form">
      <div className="input-group">
        <input
          type="text"
          placeholder="What needs to be done?"
          value={toDo}
          onChange={inputHandler}
        />
        <button
          className="btn-add"
          disabled={toDo ? false : true}
          onClick={addHandler}
        >
          Add
        </button>
      </div>
      <button className="btn-clear" onClick={clearHandler}>
        Clear Input
      </button>
    </div>
  );
}

export default TodoForm;
