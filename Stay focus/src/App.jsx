import "./ArrowFunction.js";
import { useMemo, useState } from "react";
import TodoFilters from "./components/TodoFilters";
import TodoForm from "./components/TodoForm";
import TodoHeader from "./components/TodoHeader";
import TodoList from "./components/TodoList";
import styles from "./App.module.css";

const filters = ["all", "active", "completed"];

function App() {
  const [todos, setTodos] = useState([]);
  const [activeFilter, setActiveFilter] = useState("all");

  const counts = useMemo(
    () => ({
      all: todos.length,
      active: todos.filter((todo) => !todo.completed).length,
      completed: todos.filter((todo) => todo.completed).length,
    }),
    [todos],
  );

  const visibleTodos = todos.filter((todo) => {
    if (activeFilter === "active") return !todo.completed;
    if (activeFilter === "completed") return todo.completed;
    return true;
  });

  function addTodo(title) {
    setTodos((currentTodos) => [
      ...currentTodos,
      { id: crypto.randomUUID(), title, completed: false },
    ]);
  }

  function toggleTodo(id) {
    setTodos((currentTodos) =>
      currentTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  }

  function deleteTodo(id) {
    setTodos((currentTodos) => currentTodos.filter((todo) => todo.id !== id));
  }

  return (
    <main className={styles.page}>
      <section className={styles.todoApp} aria-labelledby="todo-title">
        <TodoHeader />
        <TodoForm onAddTodo={addTodo} />
        <div className={styles.toolbar}>
          <p className={styles.remainingCount} aria-live="polite">
            {counts.active} {counts.active === 1 ? "task" : "tasks"} left
          </p>
          <TodoFilters
            filters={filters}
            activeFilter={activeFilter}
            counts={counts}
            onFilterChange={setActiveFilter}
          />
        </div>
        <TodoList
          todos={visibleTodos}
          activeFilter={activeFilter}
          onToggleTodo={toggleTodo}
          onDeleteTodo={deleteTodo}
        />
      </section>
      <p className={styles.footer}>Small steps add up. You&apos;ve got this.</p>
    </main>
  );
}

export default App;
