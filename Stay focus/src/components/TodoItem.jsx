import styles from "./TodoItem.module.css";

function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li className={styles.item}>
      <label className={styles.task}>
        <input
          className={styles.checkbox}
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
        />
        <span
          className={`${styles.title} ${
            todo.completed ? styles.completed : ""
          }`}
        >
          {todo.title}
        </span>
      </label>
      <button
        className={styles.deleteButton}
        type="button"
        aria-label={`Delete ${todo.title}`}
        onClick={() => onDelete(todo.id)}
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </li>
  );
}

export default TodoItem;
