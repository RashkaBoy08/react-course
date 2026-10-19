import styles from "./TodoHeader.module.css";

function TodoHeader() {
  return (
    <header className={styles.header}>
      <p className={styles.eyebrow}>MAKE TODAY COUNT</p>
      <h1 className={styles.title} id="todo-title">
        My tasks
      </h1>
      <p className={styles.subtitle}>A little progress every day.</p>
    </header>
  );
}

export default TodoHeader;
