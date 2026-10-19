import TodoItem from "./TodoItem";
import styles from "./TodoList.module.css";

const emptyMessages = {
  all: "Nothing on your list yet. Add a task to get started.",
  active: "You have no active tasks. Nice work!",
  completed: "No completed tasks yet. Keep going!",
};

function TodoList({ todos, activeFilter, onToggleTodo, onDeleteTodo }) {
  if (todos.length === 0) {
    return (
      <p className={styles.emptyState} role="status">
        {emptyMessages[activeFilter]}
      </p>
    );
  }

  return (
    <ul className={styles.list}>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggleTodo}
          onDelete={onDeleteTodo}
        />
      ))}
    </ul>
  );
}

export default TodoList;
