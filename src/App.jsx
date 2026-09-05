import { useState } from "react";

function App() {
  const [hobbies, setHobbies] = useState([]);
  const [input, setInput] = useState("");

  // Add hobby
  const addHobby = () => {
    if (input.trim() === "") return;

    setHobbies([...hobbies, input]);
    setInput("");
  };

  // Remove hobby
  const removeHobby = (hobbyToRemove) => {
    const newHobbies = hobbies.filter((hobby) => hobby !== hobbyToRemove);

    setHobbies(newHobbies);
  };

  return (
    <div>
      <h1>Enter your hobbies</h1>

      <input
        type="text"
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter your hobbies"
        value={input}
      />

      <button onClick={addHobby}>Add Hobby</button>

      <ul>
        {hobbies.length === 0 && <p>No hobbies added yet</p>}

        {hobbies.map((hobby, index) => (
          <li key={index}>
            {hobby}

            <br />

            <button onClick={() => removeHobby(hobby)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
