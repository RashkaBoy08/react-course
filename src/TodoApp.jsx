import { useState, useReducer } from "react";

export function TodoApp() {
  //states;
  let todoList = [];

  const handleTodo = (state, action) => {
    switch (action.type) {
      case "add":
        return [...state, action.payload];
      case "toggle":
        return state.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo,
        );
      case "delete":
        return state.filter((todo) => todo.id !== action.payload);
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(handleTodo, todoList);

  const [text, setText] = useState("");

  function addTodo() {
    if (text.trim().charAt(0).toUpperCase()) {
      const newTodo = {
        id: crypto.randomUUID(),
        text,
        completed: false,
      };
      dispatch({ type: "add", payload: newTodo });
      setText("");
    }
    console.log(state);
  }

  //markup
  return (
    <div>
      <h1>Todo App</h1>
      {/* input */}
      <input
        type="text"
        placeholder="enter your todo list"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <button onClick={addTodo}>Todo List</button>
      <ul>
        {state.map((todo) => (
          <li key={todo.id}>
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
                fontSize: "22px",
              }}
              onClick={() => dispatch({ type: "toggle", payload: todo.id })}
            >
              {todo.text}
            </span>
            <button
              onClick={() => dispatch({ type: "delete", payload: todo.id })}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      {/* end */}
    </div>
  );
}
