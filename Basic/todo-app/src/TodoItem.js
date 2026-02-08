function ToDoItem({ todo, setTodo }) {
  function handleCheck() {
    setTodo((prev) =>
      prev.map((t) =>
        t.todo === todo.todo ? { ...t, checked: !t.checked } : t,
      ),
    );
  }
  function handleDelete() {
    setTodo((prev) => prev.filter((t) => t.todo !== todo.todo));
  }
  return (
    <div
      className={`todo-item ${todo.checked ? "completed" : ""}`}
      onClick={handleCheck}
    >
      <div className="todo-content">
        <span className="checkbox">{todo.checked && "✓"}</span>
        <span className="todo-text">{todo.todo}</span>
      </div>
      <button className="btn-delete" onClick={handleDelete}>
        🗑
      </button>
    </div>
  );
}

export default ToDoItem;
