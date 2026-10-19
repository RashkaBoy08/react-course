import { useState } from "react";
import styles from "./TodoForm.module.css";

function TodoForm({ onAddTodo }) {
  const [title, setTitle] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const trimmedTitle = title.trim();
    if (!trimmedTitle) return;

    onAddTodo(trimmedTitle);
    setTitle("");
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.label} htmlFor="new-todo">
        Add a task
      </label>
      <div className={styles.inputRow}>
        <input
          className={styles.input}
          id="new-todo"
          name="todo"
          type="text"
          placeholder="What needs to get done?"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          maxLength={120}
        />
        <button className={styles.submitButton} type="submit">
          Add task
        </button>
      </div>
    </form>
  );
}

export default TodoForm;
