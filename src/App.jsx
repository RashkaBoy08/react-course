import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [task, setTask] = useState([]);

  // Add a new routine
  const AddtoRoutine = () => {
    const trimmedInput = input.trim();

    // Don't add an empty task
    if (trimmedInput === "") return;

    const capitalizedInput =
      trimmedInput.charAt(0).toUpperCase() + trimmedInput.slice(1);

    const newTask = {
      name: capitalizedInput,
      id: crypto.randomUUID(),
      complete: false,
    };

    setTask((prevTask) => [...prevTask, newTask]);
    setInput("");
  };

  // Toggle task completion
  const handleToggle = (id) => {
    const selectedTask = task.find((item) => item.id === id);

    if (!selectedTask) return;

    setTask((prevTask) =>
      prevTask.map((item) => {
        if (item.id === id) {
          const completed = !item.complete;

          return { ...item, complete: completed };
        }

        return item;
      }),
    );

    if (!selectedTask.complete) {
      alert("Congratulations! You are done!");
    }
  };

  const removeTask = (id) => {
    setTask((prevTask) => prevTask.filter((item) => item.id !== id));
  };

  return (
    <div>
      <h1>My Daily Routine</h1>

      <input
        type="text"
        placeholder="Enter your routine"
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />

      <button onClick={AddtoRoutine}>Add to Routine</button>

      {task.length === 0 && <p>There's no routine</p>}

      <ul>
        {task.map((item) => (
          <li key={item.id}>
            {item.name}
            <input
              type="checkbox"
              onChange={() => handleToggle(item.id)}
              checked={item.complete}
            />
            {/* remmove task-button  */}
            <button onClick={() => removeTask(item.id)}>
              Remove
            </button> <br /> <br />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
