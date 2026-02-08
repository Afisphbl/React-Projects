import ToDoItem from "./TodoItem";

function ToDoList({ todos, setTodo }) {
  console.log(todos);
  return (
    <div className="todo-list">
      {todos.length > 0 ? (
        todos.map((todo) => (
          <ToDoItem key={todo} todo={todo} setTodo={setTodo} />
        ))
      ) : (
        <p className="empty-state">No tasks yet. Add one above!</p>
      )}
    </div>
  );
}

export default ToDoList;
